using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

public static class EmailHelper
{
    private static string? _fromEmail;
    private static string? _password;
    private static string? _host;
    private static int _port;
    private static bool _enableSsl;

    public static void Initialize(IConfiguration config)
    {
        if (config == null)
            throw new ArgumentNullException(nameof(config));

        var section = config.GetSection("EmailSettings");

        _fromEmail = section["FromEmail"] ?? throw new InvalidOperationException("FromEmail not configured");
        _password = section["Password"] ?? throw new InvalidOperationException("Password not configured");
        _host = section["Host"] ?? throw new InvalidOperationException("SMTP Host not configured");
        _port = int.TryParse(section["Port"], out var p) ? p : 465;
        _enableSsl = bool.TryParse(section["EnableSsl"], out var ssl) ? ssl : true;
    }

    public static async Task SendAsync(string toEmail, string subject, string body)
    {
        if (string.IsNullOrEmpty(_fromEmail) || string.IsNullOrEmpty(_password) || string.IsNullOrEmpty(_host))
            throw new InvalidOperationException("EmailHelper is not initialized");

        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Payltr", _fromEmail));
        message.To.Add(MailboxAddress.Parse(toEmail));
        message.Subject = subject;
        message.Body = new TextPart("html") { Text = body };

        using var smtp = new SmtpClient();

        // Use implicit SSL if configured (Port 465)
        var socketOption = _enableSsl ? SecureSocketOptions.SslOnConnect : SecureSocketOptions.StartTls;

        await smtp.ConnectAsync(_host, _port, socketOption);
        await smtp.AuthenticateAsync(_fromEmail, _password);
        await smtp.SendAsync(message);
        await smtp.DisconnectAsync(true);
    }
}
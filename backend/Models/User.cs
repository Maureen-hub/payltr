using System;
using System.ComponentModel.DataAnnotations;

namespace Payltr.Models
{
    public class User
    {
        [Key]
        public Guid UserID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = string.Empty;
        public string PasswordSalt { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public bool IsDeleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }

        public string? EmailVerificationToken { get; set; }
        public DateTime? TokenExpiry { get; set; }
        public bool EmailVerified { get; set; } = false;
    }
}
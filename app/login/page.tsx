import { LoginForm } from '@/components/auth/LoginForm';
import Link from 'next/link';

export const metadata = {
  title: 'Sign In - PayLTR',
  description: 'Sign in to your PayLTR account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              PayLTR
            </span>
          </Link>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-600 mb-8">Sign in to access your financing dashboard</p>

          <LoginForm />
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Protected by industry-leading security standards
        </p>
      </div>
    </div>
  );
}

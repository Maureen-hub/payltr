import { SignupForm } from '@/components/auth/SignupForm';
import Link from 'next/link';

export const metadata = {
  title: 'Create Account - PayLTR',
  description: 'Create your PayLTR account',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              PayLTR
            </span>
          </Link>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Get started</h1>
          <p className="text-gray-600 mb-8">Create your account to apply for financing</p>

          <SignupForm />
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Fast setup. No credit card required.
        </p>
      </div>
    </div>
  );
}

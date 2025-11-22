'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CurrentUser {
  email: string;
  name: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUserStr = localStorage.getItem('currentUser');
    if (!currentUserStr) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(currentUserStr));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    router.push('/');
  };

  if (!mounted || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            PayLTR
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Sign out
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-slate-800 rounded-xl p-8 mb-8 border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome, {user.name}</h1>
          <p className="text-gray-400">{user.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/apply" className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl p-8 text-white hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Apply for Financing</h3>
                <p className="text-white/80">Start your loan application today</p>
              </div>
            </div>
          </Link>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">My Applications</h3>
                <p className="text-gray-400">View your pending and approved loans</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🏦</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connected Accounts</h3>
                <p className="text-gray-400">Manage your bank connections</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚙️</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Settings</h3>
                <p className="text-gray-400">Update your profile and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

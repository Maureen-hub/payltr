'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoanApplicationWizard } from '@/components/apply/LoanApplicationWizard';

export default function ApplyPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setIsAuthenticated(true);
  }, [router]);

  if (!mounted || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
    );
  }

  return <LoanApplicationWizard />;
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoanApplicationWizard } from '@/components/apply/LoanApplicationWizard';

export default function ApplyPage() {
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.replace('/login');
    }
  }, [router]);

  return <LoanApplicationWizard />;
}

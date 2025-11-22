'use client';

import { useState, useEffect } from 'react';
import { StepIndicator } from './StepIndicator';
import { CompanyDetailsStep } from './steps/CompanyDetailsStep';
import { FinancialConsentStep } from './steps/FinancialConsentStep';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import type { LoanApplicationState, CompanyDetails, FinancialConsent } from '@/lib/schemas/application';

const STEPS = ['Company Details', 'Bank Connection', 'Review'];

export function LoanApplicationWizard() {
  const [applicationState, setApplicationState, isReady] = useLocalStorage<LoanApplicationState>(
    'loanApplication',
    { currentStep: 0 },
  );

  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    if (applicationState.currentStep > 0) {
      setShowSaved(true);
      const timer = setTimeout(() => setShowSaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [applicationState.currentStep]);

  if (!isReady) {
    return null;
  }

  const currentStep = applicationState.currentStep;

  const handleCompanyDetailsNext = (data: CompanyDetails) => {
    setApplicationState(prev => ({
      ...prev,
      currentStep: 1,
      companyDetails: data,
    }));
  };

  const handleFinancialConsentNext = (data: FinancialConsent) => {
    setApplicationState(prev => ({
      ...prev,
      currentStep: 2,
      financialConsent: data,
    }));
  };

  const handleFinancialConsentBack = () => {
    setApplicationState(prev => ({
      ...prev,
      currentStep: 0,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {showSaved && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <p className="text-sm text-green-700">Your progress has been saved</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Loan Application</h1>
            <p className="text-gray-600">Complete these steps to apply for financing</p>
          </div>

          <StepIndicator steps={STEPS} currentStep={currentStep} />

          <div className="mt-12">
            {currentStep === 0 && (
              <CompanyDetailsStep
                initialData={applicationState.companyDetails}
                onNext={handleCompanyDetailsNext}
              />
            )}

            {currentStep === 1 && (
              <FinancialConsentStep
                initialData={applicationState.financialConsent}
                onNext={handleFinancialConsentNext}
                onBack={handleFinancialConsentBack}
              />
            )}

            {currentStep === 2 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for completing your application. We'll review your information and contact you within 24 hours.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-left">
                  <h3 className="font-semibold text-gray-900 mb-4">Application Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-600">Company</p>
                      <p className="font-medium">{applicationState.companyDetails?.companyName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Financing Purpose</p>
                      <p className="font-medium capitalize">{applicationState.companyDetails?.purpose}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Bank Status</p>
                      <p className="font-medium text-green-600">✓ Connected via Ponto</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { financialConsentSchema, type FinancialConsent } from '@/lib/schemas/application';
import { useState } from 'react';

interface FinancialConsentStepProps {
  initialData?: FinancialConsent;
  onNext: (data: FinancialConsent) => void;
  onBack: () => void;
}

export function FinancialConsentStep({ initialData, onNext, onBack }: FinancialConsentStepProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(initialData?.bankConnected || false);
  const [retrievingData, setRetrievingData] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FinancialConsent>({
    resolver: zodResolver(financialConsentSchema),
    defaultValues: initialData,
  });

  const consentAgreed = watch('consentAgreement');

  const handleConnectBank = async () => {
    setIsConnecting(true);
    try {
      // Simulate Ponto OAuth redirect
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful connection
      setRetrievingData(true);
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsConnected(true);
      setValue('bankConnected', true);
      setRetrievingData(false);
    } finally {
      setIsConnecting(false);
    }
  };

  const onSubmit = async (data: FinancialConsent) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
        <h3 className="font-semibold text-gray-900 mb-2">Connect Your Bank Account</h3>
        <p className="text-sm text-gray-700">
          We need to securely access your bank data to assess your creditworthiness. PayLTR uses Ponto, a
          certified PSD2 provider, to ensure your data is protected.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">What data do we retrieve?</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-primary-600 mt-1">✓</span>
            <span className="text-sm text-gray-700">Transaction history (last 90 days)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-600 mt-1">✓</span>
            <span className="text-sm text-gray-700">Account balances</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-600 mt-1">✓</span>
            <span className="text-sm text-gray-700">Payment patterns</span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">
          Your data is encrypted and only used for credit assessment. We never store your password.
        </p>
      </div>

      {!isConnected && (
        <button
          type="button"
          onClick={handleConnectBank}
          disabled={isConnecting || retrievingData}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
        >
          {retrievingData && <span className="animate-spin">⚡</span>}
          {isConnecting ? 'Redirecting to Ponto...' : retrievingData ? 'Retrieving bank data...' : 'Connect Bank with Ponto'}
        </button>
      )}

      {isConnected && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center gap-3">
          <span className="text-green-600 text-xl">✓</span>
          <div>
            <p className="font-medium text-green-900">Bank account successfully connected</p>
            <p className="text-sm text-green-700">Your data is being analyzed</p>
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <label className="flex items-start gap-3">
          <input
            {...register('consentAgreement')}
            type="checkbox"
            className="w-4 h-4 text-primary-600 rounded mt-1"
          />
          <span className="text-sm text-gray-700">
            I agree to PayLTR's{' '}
            <a href="#" className="text-primary-600 hover:underline font-medium">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary-600 hover:underline font-medium">
              Terms of Service
            </a>
          </span>
        </label>
        {errors.consentAgreement && <p className="mt-2 text-sm text-red-600">{errors.consentAgreement.message}</p>}
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!isConnected || !consentAgreed}
          className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 transition-colors"
        >
          Complete Application
        </button>
      </div>
    </form>
  );
}

'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { companyDetailsSchema, type CompanyDetails } from '@/lib/schemas/application';
import { useState } from 'react';

interface CompanyDetailsStepProps {
  initialData?: CompanyDetails;
  onNext: (data: CompanyDetails) => void;
}

const INDUSTRIES = [
  'Retail',
  'Manufacturing',
  'Technology',
  'Logistics',
  'Healthcare',
  'Food & Beverage',
  'Construction',
  'Other',
];

const PURPOSES = [
  { value: 'marketing', label: 'Marketing & Growth' },
  { value: 'inventory', label: 'Voorraad (Inventory)' },
  { value: 'operational', label: 'Operationele kosten (Operational)' },
  { value: 'software', label: 'Software & Tools' },
  { value: 'vat', label: 'BTW (VAT)' },
  { value: 'projects', label: 'Projecten & Groei (Projects & Growth)' },
];

export function CompanyDetailsStep({ initialData, onNext }: CompanyDetailsStepProps) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CompanyDetails>({
    resolver: zodResolver(companyDetailsSchema),
    defaultValues: initialData,
  });

  const kvkValue = watch('kvkNumber');

  const onSubmit = async (data: CompanyDetails) => {
    setIsLoading(true);
    try {
      // Simulate KvK lookup if needed
      await new Promise(resolve => setTimeout(resolve, 500));
      onNext(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-900">
          Please provide your company details to get started. We'll use your KvK number to prefill some information.
        </p>
      </div>

      <div>
        <label htmlFor="kvkNumber" className="block text-sm font-medium text-gray-700 mb-1">
          KvK Number *
        </label>
        <input
          {...register('kvkNumber')}
          type="text"
          id="kvkNumber"
          placeholder="12345678"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          maxLength={8}
        />
        {errors.kvkNumber && <p className="mt-1 text-sm text-red-600">{errors.kvkNumber.message}</p>}
        <p className="mt-1 text-xs text-gray-500">8-digit Chamber of Commerce number</p>
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name *
        </label>
        <input
          {...register('companyName')}
          type="text"
          id="companyName"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Street Address *
        </label>
        <input
          {...register('address')}
          type="text"
          id="address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City *
          </label>
          <input
            {...register('city')}
            type="text"
            id="city"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code *
          </label>
          <input
            {...register('postalCode')}
            type="text"
            id="postalCode"
            placeholder="1234 AB"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
          Industry *
        </label>
        <select
          {...register('industry')}
          id="industry"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select your industry</option>
          {INDUSTRIES.map(ind => (
            <option key={ind} value={ind.toLowerCase()}>
              {ind}
            </option>
          ))}
        </select>
        {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Purpose of Financing *
        </label>
        <div className="space-y-3">
          {PURPOSES.map(purpose => (
            <label key={purpose.value} className="flex items-center">
              <input
                {...register('purpose')}
                type="radio"
                value={purpose.value}
                className="w-4 h-4 text-primary-600 rounded-full"
              />
              <span className="ml-3 text-sm text-gray-700">{purpose.label}</span>
            </label>
          ))}
        </div>
        {errors.purpose && <p className="mt-2 text-sm text-red-600">{errors.purpose.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Continuing...' : 'Continue to Bank Connection'}
      </button>
    </form>
  );
}

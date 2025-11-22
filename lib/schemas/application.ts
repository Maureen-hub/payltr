import { z } from 'zod';

export const companyDetailsSchema = z.object({
  kvkNumber: z.string().regex(/^\d{8}$/, 'KvK number must be 8 digits'),
  companyName: z.string().min(2, 'Company name is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  postalCode: z.string().regex(/^\d{4}\s?[A-Z]{2}$/i, 'Invalid postal code format'),
  industry: z.string().min(1, 'Industry is required'),
  purpose: z.enum(['marketing', 'inventory', 'operational', 'software', 'vat', 'projects'], {
    errorMap: () => ({ message: 'Please select a financing purpose' }),
  }),
});

export const financialConsentSchema = z.object({
  bankConnected: z.boolean().refine(val => val === true, {
    message: 'Bank connection is required',
  }),
  consentAgreement: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms',
  }),
});

export type CompanyDetails = z.infer<typeof companyDetailsSchema>;
export type FinancialConsent = z.infer<typeof financialConsentSchema>;

export interface LoanApplicationState {
  currentStep: number;
  companyDetails?: CompanyDetails;
  financialConsent?: FinancialConsent;
  bankDataRetrieving?: boolean;
  bankDataConnected?: boolean;
}

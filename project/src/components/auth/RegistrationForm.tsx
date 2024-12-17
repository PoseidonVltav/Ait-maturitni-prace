import React, { useState } from 'react';
import { UserType, RegistrationStep1Data, PaymentData, SubscriptionPlan } from '../../types/auth';
import UserTypeSelection from './UserTypeSelection';

export default function RegistrationForm() {
  const [step, setStep] = useState<'type' | 1 | 2 | 3>('type');
  const [userType, setUserType] = useState<UserType | null>(null);
  const [step1Data, setStep1Data] = useState<RegistrationStep1Data>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep(1);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step1Data.password !== step1Data.confirmPassword) {
      alert('Hesla se neshodují!');
      return;
    }
    if (userType === 'business') {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Musíte souhlasit s podmínkami!');
      return;
    }
    // Handle registration submission
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {step === 'type' ? 'Registrace' : `Registrace - ${userType === 'business' ? 'Podnikatel' : 'Uživatel'}`}
      </h2>
      
      {step === 'type' ? (
        <UserTypeSelection onSelect={handleUserTypeSelect} />
      ) : (
        <>
          {/* Progress indicator for business registration */}
          {userType === 'business' && (
            <div className="mb-6 flex justify-between">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={step1Data.email}
                  onChange={(e) => setStep1Data({ ...step1Data, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Heslo</label>
                <input
                  type="password"
                  value={step1Data.password}
                  onChange={(e) => setStep1Data({ ...step1Data, password: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Potvrzení hesla</label>
                <input
                  type="password"
                  value={step1Data.confirmPassword}
                  onChange={(e) => setStep1Data({ ...step1Data, confirmPassword: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Další
              </button>
            </form>
          )}

          {step === 2 && userType === 'business' && (
            <form onSubmit={handleStep2Submit} className="space-y-4">
              <div className="space-y-4">
                {[
                  { id: 'one_month', label: '1. One month' },
                  { id: 'six_months', label: '2. 6 months' },
                  { id: 'one_year', label: '3. One year' },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedPlan === plan.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPlan(plan.id as SubscriptionPlan)}
                  >
                    {plan.label}
                  </div>
                ))}
              </div>

              {selectedPlan && (
                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Číslo karty</label>
                    <input
                      type="text"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Platnost</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Jméno na kartě</label>
                    <input
                      type="text"
                      value={paymentData.name}
                      onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Další
                </button>
                {/* SMAZAT - Tlačítko pro přeskočení */}
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  Přeskočit
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Souhlas s podmínkami</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Souhlasím s tím že se vzdávám práv na refund a s tím že můžou nakládat se všemi údaji, které jsem posktl/a.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    Souhlasím s podmínkami
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Dokončit registraci
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { UserType } from '../../types/auth';
import UserTypeSelection from './UserTypeSelection';

export default function LoginForm() {
  const [step, setStep] = useState<'type' | 'credentials'>('type');
  const [userType, setUserType] = useState<UserType | null>(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep('credentials');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  if (step === 'type') {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Přihlášení</h2>
        <UserTypeSelection onSelect={handleUserTypeSelect} />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Přihlášení - {userType === 'business' ? 'Podnikatel' : 'Uživatel'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Heslo</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Přihlásit se
        </button>
      </form>
    </div>
  );
}
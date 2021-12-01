
import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { RegisterUserProvider } from './registerUser';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <RegisterUserProvider>
          {children}
        </RegisterUserProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  console.log('AuthProvider');
  const initialToken = 'rjh9Bfy5ysW492t4Nwt4QZy+MBiy/vzWPm6GYAzyjDU=.AGPZqi7euMr2mzu4Z9HzYXhVGP++VZnKZgivnhJ1Ef8=.epgHGEex04KZqONKv/JDS/v/4AXQHi+X8ojycYDpcSeof07NjyeyIwSJJBMadgTAJnEjnJJ7EcTLdVJdKcOxpQ==';
  const [token, setToken] = useState<string | null>(initialToken);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  console.log('context', context);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
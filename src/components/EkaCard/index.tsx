import React, { ReactNode } from 'react';
import Card from './style';

interface EkaCardProps {
  children: ReactNode;
}

export const EkaCard: React.FC<EkaCardProps> = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>
  );
};
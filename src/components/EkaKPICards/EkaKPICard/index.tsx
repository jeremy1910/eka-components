import React, { ReactNode } from 'react';
import { EkaCard, EkaText } from '../../../index';
import { KPIWrapper, TitleWrapper } from './style';

interface EkaKPICardProps {
    title: string;
    kpi: number
}

export const EkaKPICard: React.FC<EkaKPICardProps> = ({ title, kpi }) => {
  console.log({title, kpi})
  return (
    <EkaCard>
      <TitleWrapper>{title}</TitleWrapper>
      <KPIWrapper>{kpi}</KPIWrapper>
    </EkaCard>
  );
};
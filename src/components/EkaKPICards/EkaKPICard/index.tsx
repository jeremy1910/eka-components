import React from 'react';
import { EkaCard } from '../../../index';
import { KPIWrapper } from './style';
import { TitleWrapper } from '../styles';

interface EkaKPICardProps {
    title: string;
    kpi: number
}

export const EkaKPICard: React.FC<EkaKPICardProps> = ({ title, kpi }) => {
  return (
    <EkaCard>
      <TitleWrapper>{title}</TitleWrapper>
      <KPIWrapper>{kpi}</KPIWrapper>
    </EkaCard>
  );
};
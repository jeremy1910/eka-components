import React from 'react';
import { EkaCard, EkaText } from '../../../index';
import { TitleWrapper } from '../styles';
import { ItemWrapper, NameWrapper, TimeWrapper } from './style';

interface EkaKPITopProps {
    title: string;
    kpis: {
        name: string;
        time: number;
    }[];
}

export const EkaKPITop: React.FC<EkaKPITopProps> = ({ title, kpis }) => {

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes} mn`;
  };

  return (
    <EkaCard>
      <TitleWrapper>{title}</TitleWrapper>
      {kpis.map((kpi, index) => (
        <ItemWrapper key={index}>
          <NameWrapper>{kpi.name}</NameWrapper>
          <TimeWrapper>{formatTime(kpi.time)}</TimeWrapper>
        </ItemWrapper>
      ))}
    </EkaCard>
  );
};
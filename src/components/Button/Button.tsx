import React from 'react';
import Wrapper from './style';

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>;

};



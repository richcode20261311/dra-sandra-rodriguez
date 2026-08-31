import React from 'react';
import logoImg from '../../assets/logo.png';

interface LogoProps {
  variant?: 'navbar' | 'hero' | 'badge' | 'footer' | 'watermark' | 'large';
  className?: string;
  transparentBg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const getScaleClass = () => {
    switch (variant) {
      case 'large':
        return 'h-20 sm:h-28';
      case 'hero':
        return 'h-16 sm:h-24';
      case 'footer':
        return 'h-14 sm:h-20';
      case 'badge':
        return 'h-14 sm:h-18';
      case 'watermark':
        return 'h-10 sm:h-14';
      case 'navbar':
      default:
        return 'h-14 sm:h-18';
    }
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Estética Dental Dra. Sandra Rodríguez"
        className={`w-auto ${getScaleClass()} object-contain`}
      />
    </div>
  );
};



import React, { useState } from 'react';

export const LOGO_URL = '/logo.png';

interface GSELogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'adaptive';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GSELogo: React.FC<GSELogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(LOGO_URL);

  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
    xl: 'h-16 sm:h-20 w-auto',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={imgSrc}
        onError={() => setImgSrc('/logo.png')}
        alt="PT Gemilang Segara Emas (GSE) Logo"
        className={`${sizeClasses[size]} object-contain drop-shadow-md`}
        loading="eager"
      />
    </div>
  );
};

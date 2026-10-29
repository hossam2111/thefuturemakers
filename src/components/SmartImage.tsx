import React, { useState } from 'react';

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Material Symbols icon shown if the photo fails to load. */
  fallbackIcon?: string;
  /** Background classes for the fallback block (the original gradient placeholder look). */
  fallbackClassName?: string;
  /** Purely decorative background photo: render nothing if it fails. */
  decorative?: boolean;
};

/**
 * Local photo with lazy loading and a graceful fallback: if the file is missing or broken,
 * it degrades to the gradient + icon block instead of the browser's broken-image icon.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  fallbackIcon = 'image',
  fallbackClassName = 'bg-gradient-to-tr from-primary/10 to-surface-container',
  decorative = false,
  className = '',
  loading = 'lazy',
  alt,
  ...rest
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (decorative) return null;
    return (
      <div
        data-img-fallback=""
        role="img"
        aria-label={alt}
        className={`${className} ${fallbackClassName} flex items-center justify-center`}
      >
        <span className="material-symbols-outlined text-primary/30" style={{ fontSize: 56 }} aria-hidden="true">
          {fallbackIcon}
        </span>
      </div>
    );
  }

  return (
    <img
      {...rest}
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? true : undefined}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
};

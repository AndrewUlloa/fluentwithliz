'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { DURATIONS, EASE_OUT } from '@/lib/animations';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export function ImageWithLoader({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  objectFit = 'cover',
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-muted animate-pulse min-h-full"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATIONS.fast }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent animate-shimmer" />
        </motion.div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center min-h-full">
          <div className="text-muted-foreground text-sm">Image unavailable</div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isLoading ? 0 : 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : DURATIONS.base,
            ease: EASE_OUT,
          }}
          className="relative w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-${objectFit}`}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
            sizes={sizes}
          />
        </motion.div>
      )}
    </div>
  );
}

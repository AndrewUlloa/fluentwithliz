'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n/config';

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure i18n is initialized before rendering translations
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const initPromise = i18n.init();
      if (initPromise && typeof initPromise.then === 'function') {
        initPromise.then(() => setIsReady(true));
      } else {
        i18n.on('initialized', () => {
          setIsReady(true);
        });
      }
    }
  }, []);

  // On server, render children without translations to avoid hydration mismatch
  // On client, wait for i18n to be ready before rendering translations
  if (!mounted || !isReady) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}


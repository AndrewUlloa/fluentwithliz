'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-black text-white dark:bg-white dark:text-black'
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'es'
            ? 'bg-black text-white dark:bg-white dark:text-black'
            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        ES
      </button>
    </div>
  );
}


'use client';
import {createI18nClient} from 'next-international/client';

export const { useI18n, useCurrentLocale, useScopedI18n, I18nProviderClient } = createI18nClient({
    en: () => import('./en.json'),
});

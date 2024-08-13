'use client';
import {createI18nClient} from 'next-international/client';
import {TranslationsWithParameters} from './types';

const locales = {
    en: () => import('./en.json'),
}

export const {useI18n, useCurrentLocale, useScopedI18n, I18nProviderClient} = createI18nClient<
    typeof locales,
    {
        en: TranslationsWithParameters;
    }
>(locales);

import { createI18nServer } from 'next-international/server';
import { TranslationsWithParameters } from './types';


const locales = {
    en: () => import('./en.json'),
};

export const { getI18n, getScopedI18n } = createI18nServer<
    typeof locales,
    {
        en: TranslationsWithParameters;
    }
>(locales);

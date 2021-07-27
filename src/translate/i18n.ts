import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'

import * as resources from './languages'

i18n.use(languageDetector).init({
  debug: false,
  fallbackLng: 'pt',
  defaultNS: 'translation',
  resources,
})

export { i18n }

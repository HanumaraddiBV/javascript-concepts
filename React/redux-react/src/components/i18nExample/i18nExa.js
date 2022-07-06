

import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import LangMenu from './LangMenu'

 function I18nExa() {
  return (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="<h1>Loading</h1>">
            <LangMenu></LangMenu>
        </Suspense>
    </I18nextProvider>
  )
}


export default I18nExa
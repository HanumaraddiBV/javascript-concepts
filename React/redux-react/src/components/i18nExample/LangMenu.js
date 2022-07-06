import React from 'react'
import { withTranslation } from 'react-i18next'
import TestinLangPage from './TestinLangPage'
 const LangMenu = (props) => {
    console.log('props:', props)
    const {i18n} = props
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
  return (
    <div>
        <TestinLangPage />
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ch')}>chines</button>
    </div>

  )
}


export default withTranslation()(LangMenu)
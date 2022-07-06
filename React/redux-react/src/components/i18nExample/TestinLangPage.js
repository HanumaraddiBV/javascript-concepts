import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
 class TestinLangPage extends Component {
  render() {
    const {t} = this.props
    return (
      <div>
        <h1>
            {t('lang.Hello')}
           
          </h1>
          
          <h2>
            {t('lang.description')}
          </h2>
      
          <h3>
            {t('lang.GoodMorning')}
          </h3>
      </div>
    )
  }
}


export default withTranslation()(TestinLangPage)
import { createI18n } from 'vue-i18n';

import elementEnLocale from 'element-plus/lib/locale/lang/en.js';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn.js';
import enLocale from './lang/en.js';
import zhLocale from './lang/zh-cn.js';

function getLanguage() {
  const language = window.localStorage.getItem('language');
  return language ? language : 'zh-cn';
}

export default createI18n({
  locale: getLanguage(),
  fallbackLocale: 'zh-cn',
  messages: {
    'en': {
      ...elementEnLocale,
      ...enLocale
    },
    'zh-cn': {
      ...elementZhLocale,
      ...zhLocale
    }
  }
});

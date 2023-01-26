import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import bundler from './config/bundler'
import theme from './config/theme'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: '原神百科',
  port: 6480,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  lang: 'zh-CN',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],
  bundler,
  theme
})

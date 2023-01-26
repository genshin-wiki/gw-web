import { viteBundler } from "vuepress";
import ElementPlus from 'unplugin-element-plus/vite'

export default viteBundler({
  viteOptions: {
    plugins: [
      ElementPlus({
        defaultLocale: 'zh-cn'
      })
    ]
  }
})

import { defineClientConfig } from '@vuepress/client'
import GlobalPlayer from './components/global-script.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.directive('table-drag', (el) => {
      const table = el.querySelector('table')
      el.onmousewheel = (e: { wheelDelta: number }) => {
        if (e.wheelDelta > 0) {
          table.scrollLeft -= 50
        } else {
          table.scrollLeft += 50
        }
        return false
      }
    })
  },
  setup() { },
  rootComponents: [GlobalPlayer],
})

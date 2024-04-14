import comp from "D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Kezdőlap\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"Kezdőlap\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/6-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"Projektmunka ( Fordítás )\",\"tagline\":\"Digitális tudás vezet a sikerhez.\",\"actions\":[{\"text\":\"Fejezetek\",\"icon\":\"book\",\"link\":\"./demo/\",\"type\":\"primary\"}],\"copyright\":false,\"footer\":\"2023/2024. School of Business\"},\"headers\":[],\"readingTime\":{\"minutes\":0.17,\"words\":52},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

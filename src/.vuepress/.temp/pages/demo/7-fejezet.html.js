import comp from "C:/Users/Asus/Downloads/forditas-docs/src/.vuepress/.temp/pages/demo/7-fejezet.html.vue"
const data = JSON.parse("{\"path\":\"/demo/7-fejezet.html\",\"title\":\"7. fejezet\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"7. fejezet\",\"icon\":null,\"feed\":false,\"seo\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"demo/7-fejezet.md\"}")
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

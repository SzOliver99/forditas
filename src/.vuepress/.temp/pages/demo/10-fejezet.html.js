import comp from "C:/Users/Asus/Downloads/forditas-docs/src/.vuepress/.temp/pages/demo/10-fejezet.html.vue"
const data = JSON.parse("{\"path\":\"/demo/10-fejezet.html\",\"title\":\"10. fejezet\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"10. fejezet\",\"icon\":null,\"feed\":false,\"seo\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"demo/10-fejezet.md\"}")
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

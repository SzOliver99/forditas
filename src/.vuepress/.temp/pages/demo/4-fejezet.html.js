import comp from "C:/Users/ccica/forditas/src/.vuepress/.temp/pages/demo/4-fejezet.html.vue"
const data = JSON.parse("{\"path\":\"/demo/4-fejezet.html\",\"title\":\"4. fejezet\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"4. fejezet\",\"icon\":null,\"feed\":false,\"seo\":false},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"demo/4-fejezet.md\"}")
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

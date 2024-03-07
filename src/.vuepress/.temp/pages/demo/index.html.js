import comp from "D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"HTML Fordítás\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"HTML Fordítás\",\"index\":false,\"icon\":\"code\",\"onthispage\":false,\"feed\":false,\"seo\":false},\"headers\":[{\"level\":2,\"title\":\"Felkészülés Weboldalak létrehozása\",\"slug\":\"felkeszules-weboldalak-letrehozasa\",\"link\":\"#felkeszules-weboldalak-letrehozasa\",\"children\":[]}],\"readingTime\":{\"minutes\":0.18,\"words\":55},\"filePathRelative\":\"demo/README.md\"}")
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

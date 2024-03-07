export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"Kezdőlap","i":"home"} }],
  ["/demo/1-fejezet.html", { loader: () => import(/* webpackChunkName: "1-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/1-fejezet.html.js"), meta: {"y":"a","t":"1. fejezet","i":null} }],
  ["/demo/10-fejezet.html", { loader: () => import(/* webpackChunkName: "10-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/10-fejezet.html.js"), meta: {"y":"a","t":"10. fejezet","i":null} }],
  ["/demo/11-fejezet.html", { loader: () => import(/* webpackChunkName: "11-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/11-fejezet.html.js"), meta: {"y":"a","t":"11. fejezet","i":null} }],
  ["/demo/12-fejezet.html", { loader: () => import(/* webpackChunkName: "12-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/12-fejezet.html.js"), meta: {"y":"a","t":"12. fejezet","i":null} }],
  ["/demo/2-fejezet.html", { loader: () => import(/* webpackChunkName: "2-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/2-fejezet.html.js"), meta: {"y":"a","t":"2. fejezet","i":null} }],
  ["/demo/3-fejezet.html", { loader: () => import(/* webpackChunkName: "3-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/3-fejezet.html.js"), meta: {"y":"a","t":"3. fejezet","i":null} }],
  ["/demo/4-fejezet.html", { loader: () => import(/* webpackChunkName: "4-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/4-fejezet.html.js"), meta: {"y":"a","t":"4. fejezet","i":null} }],
  ["/demo/5-fejezet.html", { loader: () => import(/* webpackChunkName: "5-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/5-fejezet.html.js"), meta: {"y":"a","t":"5. fejezet","i":null} }],
  ["/demo/6-fejezet.html", { loader: () => import(/* webpackChunkName: "6-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/6-fejezet.html.js"), meta: {"y":"a","t":"6. fejezet","i":null} }],
  ["/demo/7-fejezet.html", { loader: () => import(/* webpackChunkName: "7-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/7-fejezet.html.js"), meta: {"y":"a","t":"7. fejezet","i":null} }],
  ["/demo/8-fejezet.html", { loader: () => import(/* webpackChunkName: "8-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/8-fejezet.html.js"), meta: {"y":"a","t":"8. fejezet","i":null} }],
  ["/demo/9-fejezet.html", { loader: () => import(/* webpackChunkName: "9-fejezet.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/9-fejezet.html.js"), meta: {"y":"a","t":"9. fejezet","i":null} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"y":"a","t":"HTML Fordítás","i":"code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/programozas/vuepress/forditas/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

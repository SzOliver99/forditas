import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "HTML Fordítás",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
});

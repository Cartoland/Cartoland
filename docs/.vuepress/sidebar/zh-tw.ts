import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/zh-tw/",
  { text: "地圖", prefix: "/zh-tw/maps/", children: "structure" },
  { text: "資源包", prefix: "/zh-tw/resource-packs/", children: "structure" },
  { text: "資料包", prefix: "/zh-tw/data-packs/", children: "structure" },
  { text: "活動", prefix: "/zh-tw/activities/", children: "structure" },
]);

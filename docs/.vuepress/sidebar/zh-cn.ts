import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/zh-cn/",
  { text: "地图", prefix: "/zh-cn/maps/", children: "structure" },
  { text: "资源包", prefix: "/zh-cn/resource-packs/", children: "structure" },
  { text: "数据包", prefix: "/zh-cn/data-packs/", children: "structure" },
  { text: "活动", prefix: "/zh-cn/activities/", children: "structure" },
]);

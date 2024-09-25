import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/en-us/",
  { text: "Maps", prefix: "/en-us/maps/", children: "structure" },
  { text: "Resource Packs", prefix: "/en-us/resource-packs/", children: "structure" },
  { text: "Data Packs", prefix: "/en-us/data-packs/", children: "structure" },
  { text: "Activities", prefix: "/en-us/activities/", children: "structure" },
]);

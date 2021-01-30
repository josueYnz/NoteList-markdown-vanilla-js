import { indexPage } from "../views/pages/index.page";
import { noteListPage } from "../views/pages/noteList.page";
import { mainContent } from "../views/components/mainContent";
import notes from "../Classes/Notes";
import { noteList } from "../views/components/dynamics/noteList";
import { notAvailable } from "../views/notAvailable";

const routes = [
  {
    name: "Main page",
    page: indexPage,
    dynamicComponent: noteList,
    dynamicData: notes.getNotes(),
    url: "",
  },
  {
    name: "second page",
    page: noteListPage,
    dynamicComponent: noteList,
    dynamicData: notes.getNotes(),
    url: "#/search",
  },
];

export const router = (route) => {
  for (const { page, dynamicComponent, dynamicData, url } of routes) {
    if (route === url) {
      mainContent(page());
      dynamicComponent(dynamicData);
      return;
    }
    mainContent(notAvailable());
  }
};

import { mainContent } from "../views/components/mainContent";
import { noteListPage } from "../views/pages/noteList.page";
import { indexPage } from "../views/pages/index.page";
import { notAvailable } from "../views/notAvailable";

export const router = (route) => {
    switch (route) {
        case "":
            const mainPage = indexPage();
            mainContent(mainPage);
            break;
        case "#/search":
            const searchPage = noteListPage();
            mainContent(searchPage);
            break;
        default:
            const errorPage = notAvailable();
            mainContent(errorPage);
            break;
    }
};
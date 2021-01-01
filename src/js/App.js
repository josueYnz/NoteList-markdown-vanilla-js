import { header } from "./views/components/header";
import { mainContent } from "./views/components/mainContent";
import { noteListPage } from "./views/pages/noteList.page";

export const App = (root) => {
    // All code here.
    // scripting index
    const init = performance.now();
    const appHeader = header();
    const page = noteListPage();
    const main = mainContent(page)();
    
    root.appendChild(appHeader);
    root.appendChild(main);

    const finish = performance.now();

    console.log(finish - init);   
}
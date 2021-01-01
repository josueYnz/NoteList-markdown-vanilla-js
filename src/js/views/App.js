import { header } from "./components/header";
import { mainContent } from "./components/mainContent";

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
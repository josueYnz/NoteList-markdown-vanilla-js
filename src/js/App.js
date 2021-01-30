import { header } from "./views/components/header";
import { mainContent } from "./views/components/mainContent";
import { indexPage } from "./views/pages/index.page";
import { router } from "./router/index.router";

export const App = (root) => {
    // All code here.
    // scripting index
    const init = performance.now();
    const appHeader = header();
    const page = indexPage();
    const main = mainContent(page)();
    
    router(window.location.hash);
    window.addEventListener("hashchange", () => {
        router(window.location.hash);
    });

    root.appendChild(appHeader);
    root.appendChild(main);

    const finish = performance.now();

    console.log(finish - init);   
}
import { header } from "./views/components/header";
import { mainContent } from "./views/components/mainContent";

export const App = (root) => {
    // All code here.
    // scripting index
    
    const init = performance.now();
    const appHeader = header();
    const main = mainContent();

    root.appendChild(appHeader);
    root.appendChild(main);

    const finish = performance.now();

    console.log(finish - init);    
}
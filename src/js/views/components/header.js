import { Navbar } from "./containers/navbar";
export const header = () => {
    const header = document.createElement("header");
    const navbar = Navbar();
    header.appendChild(navbar);
    
    return header;
}
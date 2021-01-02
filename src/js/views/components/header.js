import { Navbar } from "./subComponents/navbar";
export const header = () => {
    const header = document.createElement("header");
    const navbar = Navbar();
    header.appendChild(navbar);
    
    return header;
}
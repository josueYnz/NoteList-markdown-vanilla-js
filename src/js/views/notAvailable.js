export function notAvailable(container = "") {
    const message = document.createElement("p");
    message.classList.add("text-center", "font-large-x");
    message.textContent = "There are no notes available, try creating one. Or error 404, page not found.";

    if (container) {
        container.appendChild(message);

        return;
    }
    return message;
}
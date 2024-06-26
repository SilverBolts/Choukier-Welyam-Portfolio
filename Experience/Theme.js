import { EventEmitter } from "events";

export default class Theme extends EventEmitter {
    constructor() {
        super();
        this.theme = "light";

        this.toggleButton = document.querySelector(".toggle-button");
        this.toggleCircle = document.querySelector(".toggle-circle");

        this.setEventListeners();

    }
    updateAriaLabels() {
        // dynamic changing aria-label value depending on the theme
        const themeLabel = this.theme === "light" ? "Activate dark theme" : "Activate light theme";
        this.toggleButton.setAttribute('aria-label', themeLabel);
    }

    setEventListeners() {
        this.toggleButton.addEventListener("click", () => {
            this.toggleCircle.classList.toggle("slide");
            this.theme = this.theme === "light"? "dark" : "light";
            document.body.classList.toggle("dark-theme");
            document.body.classList.toggle("light-theme");
            // console.log(this.theme);

            this.emit("switch", this.theme);


        });
    }
}
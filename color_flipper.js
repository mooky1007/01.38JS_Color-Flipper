class ColorFlipper {
    constructor(target) {
        this.target = document.querySelector(target);
        this.colorCode = this.target.querySelector(".color_value");
        this.actionButton = this.target.querySelector(".color_btn");
        this.init();
    }

    init() {
        this.actionButton.addEventListener("click", this.changeColor.bind(this));
        this.changeColor();
    }

    changeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        this.checkBackgroundColor(r, g, b)

        const randomColor = `rgb(${r}, ${g}, ${b})`;

        this.target.style.backgroundColor = randomColor;
        this.colorCode.textContent = `[ ${randomColor} ]`
    }

    checkBackgroundColor(r, g, b) {
        if (r > 155 && g > 155 && b > 155) {
            this.colorCode.style.color = "#000";
            this.actionButton.style.color = "#000";
            this.actionButton.style.borderColor = "#000";
            this.target.querySelector("h1").style.color = "#000";
        }else{
            this.colorCode.style.color = "#fff";
            this.actionButton.style.color = "#fff";
            this.actionButton.style.borderColor = "#fff";
            this.target.querySelector("h1").style.color = "#fff";
        }
    }
}
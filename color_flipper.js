class ColorFlipper {
    constructor(target) {
        this.target = document.querySelector(target);
        this.colorCode = this.target.querySelector('.color_value');
        this.actionButton = this.target.querySelector('.color_btn');
        this.init();
    }

    init() {
        this.actionButton.addEventListener('click', this.changeColor.bind(this));
        this.changeColor();
    }

    changeColor() {
        const randomColor = this.generateRandomColor();
        this.setRandomColor(randomColor);
        this.updateTextColor(randomColor);
    }

    generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    setRandomColor(color) {
        this.target.style.backgroundColor = color;
        this.colorCode.textContent = `[ ${color} ]`;
    }

    updateTextColor(color) {
        const isLightColor = this.isLightColor(color);
        const textColor = isLightColor ? '#000' : '#fff';
        this.colorCode.style.color = textColor;
        this.actionButton.style.color = textColor;
        this.actionButton.style.borderColor = textColor;
        this.target.querySelector('h1').style.color = textColor;
    }

    isLightColor(color) {
        const [r, g, b] = color
            .substring(color.indexOf('(') + 1, color.lastIndexOf(')'))
            .split(',')
            .map(Number);
        return r > 155 && g > 155 && b > 155;
    }
}

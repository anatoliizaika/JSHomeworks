import { Gadget } from './gadget.js';

export class Smartphone extends Gadget {
    #operatingSystem;

    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem; 
    }

    get operatingSystem() {
        return this.#operatingSystem;
    }

    set operatingSystem(value) {
        const allowedOS = ["iOS", "Android", "HarmonyOS"];
        if (allowedOS.includes(value)) {
            this.#operatingSystem = value;
        } else {
            console.log("Помилка: недоступна операційна система");
        }
    }

    getInfo() {
        return `${super.getInfo()} - OS: ${this.operatingSystem}`;
    }
}
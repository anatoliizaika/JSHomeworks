export class Gadget {
    #year;

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value === "number" && value >= 2000 && value <= currentYear) {
            this.#year = value;
        } else {
            console.log("Помилка: некоректний рік");
        }
    }

    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }

    static getOldestGadget(gadgetsArray) {
        return gadgetsArray.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }
}
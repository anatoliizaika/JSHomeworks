import { Gadget } from './gadget.js';
import { Smartphone } from './smartphone.js';

const gadget1 = new Gadget("Sony", "Walkman", 2005);
const gadget2 = new Gadget("Canon", "PowerShot", 2003);

const phone1 = new Smartphone("Apple", "iPhone 13", 2021, "iOS");
const phone2 = new Smartphone("Samsung", "Galaxy S21", 2020, "Android");
const phone3 = new Smartphone("Huawei", "P40", 2019, "HarmonyOS");
const phone4 = new Smartphone("Test", "FailPhone", 2023, "Symbian"); 


const gadget3 = new Gadget("OldTech", "Retro1000", 1995); 

console.log(gadget1.getInfo());
console.log(gadget2.getInfo());
console.log(phone1.getInfo());
console.log(phone2.getInfo());
console.log(phone3.getInfo());
console.log(phone4.getInfo());

const gadgets = [gadget1, gadget2, phone1, phone2, phone3];
const oldest = Gadget.getOldestGadget(gadgets);

console.log("Найстаріший гаджет:", oldest.getInfo());
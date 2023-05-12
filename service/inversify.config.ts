// file inversify.config.ts
import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken } from "./entities";
const myContainer = new Container();
// Ninja是Warrior的实现，所以我们给他们绑定，Katana和Shuriken也一样
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
export { myContainer };

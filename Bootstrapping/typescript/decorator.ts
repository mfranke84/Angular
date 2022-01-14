function MenuItem(itemID: string){
    return (target: Function) => {
        target.prototype.id = itemID;
    } 
}

@MenuItem('abc')
class Pizza {
    id: string;
}

@MenuItem('def')
class Hamburger{
    id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);
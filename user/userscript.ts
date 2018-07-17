class Human {
    name: string;
    age: number;
}

class Building {
    address: string;
}

var a = new Human();
a.age = 20; // error
a.name = "Raul";

var b = new Building();

var arrayOfHuman:Human[] = new Array<Human>(10);

arrayOfHuman[10].age = 12;
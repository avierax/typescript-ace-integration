class Human {
    name: string;
    age: number;
}

class Building {
    address: string;
}

var a = new Human();
a.name = 1; // error
a.age = "20"; // error
a.gender = 'f'; // error

a.name = "Raul";

var b = new Building();
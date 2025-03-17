const possibleNames = [
    ["Amy", "Alex", "Ava", "Allan", "Andy", "Abby", "Alex", "Amir", "Anya", "Aria", "Axel", "Aden", "Alia"],
    ["Ben", "Bill", "Bob", "Beau", "Brad", "Bryn", "Bret", "Blake", "Basil", "Bodie","Beth","Betty","Barb","Beth"],
    ["Cal", "Carl", "Cody", "Cory", "Clara", "Clay", "Cole", "Case", "Chet", "Chad", "Cara", "Cami", "Cleo", "Cali", "Cate", "Cori", "Cindy"],
    ["Dan", "Dave", "Dale", "Dean", "Drew", "Dion", "Dane", "Davy",  "Dana", "Demi", "Dina", "Dora", "Dawn", "Dixie", "Dolly"],
    ["Eli", "Evan", "Earl", "Eric", "Eddy", "Emma", "Ella", "Elsa", "Erin", "Eve", "Edie", "Emmy"],
]

class Person{
    constructor(_name, _eyeColor, _handed){
        this.name = _name;
        this.eyeColor = _eyeColor;
        this.handed = _handed;
    }
}
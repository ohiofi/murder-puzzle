class PersonGenerator{
    constructor(rng){
        this.rng = rng;
        this.possiblePersonNames = [
            ["Amy", "Alex", "Ava", "Allan", "Andy", "Abby", "Alex", "Amir", "Anya", "Aria", "Axel", "Aden", "Alia"],
            ["Ben", "Bill", "Bob", "Beau", "Brad", "Bryn", "Bret", "Blake", "Basil", "Bodie","Beth","Betty","Barb","Beth"],
            ["Cal", "Carl", "Cody", "Cory", "Clara", "Clay", "Cole", "Case", "Chet", "Chad", "Cara", "Cami", "Cleo", "Cali", "Cate", "Cori", "Cindy"],
            ["Dan", "Dave", "Dale", "Dean", "Drew", "Dion", "Dane", "Davy",  "Dana", "Demi", "Dina", "Dora", "Dawn", "Dixie", "Dolly"],
            ["Eli", "Evan", "Earl", "Eric", "Eddy", "Emma", "Ella", "Elsa", "Erin", "Eve", "Edie", "Emmy"],
        ]
        this.possibleEyeColors = ["brown","brown","brown","brown","blue","blue","hazel","green"];
    }

    getPerson(){
        let row = Math.floor(this.rng() * this.possiblePersonNames.length);
        let col = Math.floor(this.rng() * this.possiblePersonNames[row].length);
        let sus = new Person(this.possiblePersonNames[row][col], this.possibleEyeColors[ Math.floor(this.rng() * this.possibleEyeColors.length)]);
        this.possiblePersonNames.splice(row, 1); // delete that entire row of names
        sus.isRightHanded = ((row + col) % 4 < 2);
        sus.isTall = ((row + col) % 2 == 0);
        return sus;
    }
}
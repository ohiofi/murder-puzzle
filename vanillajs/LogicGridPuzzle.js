class LogicGridPuzzle {
    constructor(dateObject) {
        this.date = dateObject;
        let daysSinceEpoch = Math.floor((this.date - new Date().getTimezoneOffset()) / (60 * 60 * 24 * 1000));
        this.rng = new Math.seedrandom(daysSinceEpoch);
        //this.suspects = ["A","B","C","D"]
        this.clues = [];
        this.clueNumber = 1;
        this.suspects = this.generateSuspects();
        this.weapons = ["Dagger", "Gun", "Rope", "Knife"];
        this.locations = ["Store", "Library", "Theater", "Museum"];
        this.solution = this.generateSolution();
    }

    shuffleArray(array) {
        
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(this.rng() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateSolution() {
        this.shuffleArray(this.suspects);
        this.shuffleArray(this.weapons);
        this.shuffleArray(this.locations);

        let solution = this.suspects.map((suspect, index) => ({
            suspect,
            weapon: this.weapons[index],
            location: this.locations[index],
            isMurderer: false
        }));

        let murdererIndex = Math.floor(this.rng() * solution.length);
        solution[murdererIndex].isMurderer = true;

        return solution;
    }

    generateLocations(){
        let personGenerator = new PersonGenerator();
        let result = [];
        for(let i=0;i<4;i++){
            result.push(personGenerator.getPerson())
        }
        return result;
    }

    generateSuspects(){
        let personGenerator = new PersonGenerator();
        let result = [];
        for(let i=0;i<4;i++){
            result.push(personGenerator.getPerson())
        }
        return result;
    }

    generateWeapons(){
        let personGenerator = new PersonGenerator();
        let result = [];
        for(let i=0;i<4;i++){
            result.push(personGenerator.getPerson())
        }
        return result;
    }

    getDirectClue() {
        let clue = {};
        let category = ["suspect/location", "suspect/weapon", "weapon/location", "murderer"][Math.floor(this.rng() * 4)];
        let selected = this.solution[Math.floor(this.rng() * this.solution.length)];

        switch (category) {
            case "suspect/location":
                clue.text = `${selected.suspect} was at the ${selected.location}.`;
                clue.details = [selected.suspect, selected.location];
                break;
            case "suspect/weapon":
                clue.text = `${selected.suspect} had the ${selected.weapon}.`;
                clue.details = [selected.suspect, selected.weapon];
                break;
            case "weapon/location":
                clue.text = `The ${selected.weapon} was at the ${selected.location}.`;
                clue.details = [selected.weapon, selected.location];
                break;
            case "murderer":
                let murderer = this.solution.find(item => item.isMurderer);
                clue.text = `${murderer.suspect} was the murderer.`;
                clue.details = [murderer.suspect, "was the murderer"];
                break;
        }
        return clue;
    }

    getIndirectClue() {
        let clue = {};
        let category = ["suspect/location", "suspect/weapon", "weapon/location", "murderer"][Math.floor(this.rng() * 4)];
        let selected = this.solution[Math.floor(this.rng() * this.solution.length)];

        switch (category) {
            case "suspect/location":
                let otherLocations = this.locations.filter(loc => loc !== selected.location);
                let location = otherLocations[Math.floor(this.rng() * otherLocations.length)];
                clue.text = `${selected.suspect} was NOT at the ${location}.`;
                clue.details = [selected.suspect, `not ${location}`];
                break;
            case "suspect/weapon":
                let otherWeapons = this.weapons.filter(wpn => wpn !== selected.weapon);
                let weapon = otherWeapons[Math.floor(this.rng() * otherWeapons.length)];
                clue.text = `${selected.suspect} did NOT have the ${weapon}.`;
                clue.details = [selected.suspect, `not ${weapon}`];
                break;
            case "weapon/location":
                let otherLocs = this.locations.filter(loc => loc !== selected.location);
                let wrongLocation = otherLocs[Math.floor(this.rng() * otherLocs.length)];
                clue.text = `The ${selected.weapon} was NOT found at the ${wrongLocation}.`;
                clue.details = [selected.weapon, `not ${wrongLocation}`];
                break;
            case "murderer":
                let innocent = this.solution.find(item => !item.isMurderer);
                clue.text = `${innocent.suspect} was NOT the murderer.`;
                clue.details = [innocent.suspect, "not murderer"];
                break;
        }
        return clue;
    }

    generateClue() {
        return this.rng() < 1 / 15 * this.clueNumber ? this.getDirectClue() : this.getIndirectClue();
    }

    playGame() {
        return "Welcome to the Logic Grid Puzzle for " + this.date.toDateString()
        // console.log("Suspects:", this.suspects);
        // console.log("Weapons:", this.weapons);
        // console.log("Locations:", this.locations);
        // console.log("Welcome to the Logic Grid Puzzle!");
        // console.log("Suspects:", this.suspects);
        // console.log("Weapons:", this.weapons);
        // console.log("Locations:", this.locations);
        // while (true) {
        //     let choice = prompt("What would you like to do?\n1. Get a clue\n2. Solve the puzzle");
        //     if (choice === "1") {
        //         let nextClue = this.generateClue();
        //         for (let i = 0; i < 50; i++) {
        //             if (!this.clues.includes(nextClue.details)) break;
        //             nextClue = this.generateClue();
        //         }
        //         this.clues.push(nextClue.details);
        //         console.log(`Clue #${this.clueNumber}: ${nextClue.text}`);
        //         this.clueNumber++;
        //     } else if (choice === "2") {
        //         this.finalGuess();
        //         break;
        //     }
        // }
        
    }

    finalGuess() {
        let guessSuspect = prompt("Enter your guess for the suspect:");
        let guessWeapon = prompt("Enter your guess for the weapon:");
        let guessLocation = prompt("Enter your guess for the location:");

        let murderer = this.solution.find(item => item.isMurderer);

        if (
            murderer.suspect.toLowerCase() === guessSuspect.toLowerCase() &&
            murderer.weapon.toLowerCase() === guessWeapon.toLowerCase() &&
            murderer.location.toLowerCase() === guessLocation.toLowerCase()
        ) {
            console.log("Congratulations, you've solved the puzzle!");
        } else {
            console.log(`Oops, that's not correct. The answer was: ${murderer.suspect} with the ${murderer.weapon} in the ${murderer.location}.`);
        }
    }
}
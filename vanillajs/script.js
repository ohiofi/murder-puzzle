class LogicGridPuzzle {
    constructor(seed) {
        this.suspects = ["Alice", "Bob", "Carol", "Eddie"];
        this.weapons = ["Dagger", "Gun", "Rope", "Knife"];
        this.locations = ["Store", "Library", "Theater", "Museum"];
        this.solution = this.generateSolution(seed);
        this.hints = [];
        this.hintNumber = 1;
    }

    shuffleArray(array, seed) {
        let rng = new Math.seedrandom(seed);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateSolution(seed) {
        this.shuffleArray(this.suspects, seed);
        this.shuffleArray(this.weapons, seed);
        this.shuffleArray(this.locations, seed);

        let solution = this.suspects.map((suspect, index) => ({
            suspect,
            weapon: this.weapons[index],
            location: this.locations[index],
            isMurderer: false
        }));

        let murdererIndex = Math.floor(Math.random() * solution.length);
        solution[murdererIndex].isMurderer = true;

        return solution;
    }

    getDirectHint() {
        let hint = {};
        let category = ["suspect/location", "suspect/weapon", "weapon/location", "murderer"][Math.floor(Math.random() * 4)];
        let selected = this.solution[Math.floor(Math.random() * this.solution.length)];

        switch (category) {
            case "suspect/location":
                hint.text = `${selected.suspect} was at the ${selected.location}.`;
                hint.details = [selected.suspect, selected.location];
                break;
            case "suspect/weapon":
                hint.text = `${selected.suspect} had the ${selected.weapon}.`;
                hint.details = [selected.suspect, selected.weapon];
                break;
            case "weapon/location":
                hint.text = `The ${selected.weapon} was at the ${selected.location}.`;
                hint.details = [selected.weapon, selected.location];
                break;
            case "murderer":
                let murderer = this.solution.find(item => item.isMurderer);
                hint.text = `${murderer.suspect} was the murderer.`;
                hint.details = [murderer.suspect, "was the murderer"];
                break;
        }
        return hint;
    }

    getIndirectHint() {
        let hint = {};
        let category = ["suspect/location", "suspect/weapon", "weapon/location", "murderer"][Math.floor(Math.random() * 4)];
        let selected = this.solution[Math.floor(Math.random() * this.solution.length)];

        switch (category) {
            case "suspect/location":
                let otherLocations = this.locations.filter(loc => loc !== selected.location);
                let location = otherLocations[Math.floor(Math.random() * otherLocations.length)];
                hint.text = `${selected.suspect} was NOT at the ${location}.`;
                hint.details = [selected.suspect, `not ${location}`];
                break;
            case "suspect/weapon":
                let otherWeapons = this.weapons.filter(wpn => wpn !== selected.weapon);
                let weapon = otherWeapons[Math.floor(Math.random() * otherWeapons.length)];
                hint.text = `${selected.suspect} did NOT have the ${weapon}.`;
                hint.details = [selected.suspect, `not ${weapon}`];
                break;
            case "weapon/location":
                let otherLocs = this.locations.filter(loc => loc !== selected.location);
                let wrongLocation = otherLocs[Math.floor(Math.random() * otherLocs.length)];
                hint.text = `The ${selected.weapon} was NOT found at the ${wrongLocation}.`;
                hint.details = [selected.weapon, `not ${wrongLocation}`];
                break;
            case "murderer":
                let innocent = this.solution.find(item => !item.isMurderer);
                hint.text = `${innocent.suspect} was NOT the murderer.`;
                hint.details = [innocent.suspect, "not murderer"];
                break;
        }
        return hint;
    }

    generateHint() {
        return Math.random() < 1 / 15 * this.hintNumber ? this.getDirectHint() : this.getIndirectHint();
    }

    playGame() {
        console.log("Welcome to the Logic Grid Puzzle!");
        console.log("Suspects:", this.suspects);
        console.log("Weapons:", this.weapons);
        console.log("Locations:", this.locations);
        // while (true) {
        //     let choice = prompt("What would you like to do?\n1. Get a hint\n2. Solve the puzzle");
        //     if (choice === "1") {
        //         let nextHint = this.generateHint();
        //         for (let i = 0; i < 50; i++) {
        //             if (!this.hints.includes(nextHint.details)) break;
        //             nextHint = this.generateHint();
        //         }
        //         this.hints.push(nextHint.details);
        //         console.log(`Hint #${this.hintNumber}: ${nextHint.text}`);
        //         this.hintNumber++;
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

const d = new Date();
let game = new LogicGridPuzzle(d.getMilliseconds());
game.playGame();

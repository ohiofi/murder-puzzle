let game;
const emojis = ['✅', '❌', '❔',''];
document.getElementById('datepicker').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
});

document.getElementById('datepicker').value = new Date().toDateInputValue();

document.querySelectorAll('.gridCell').forEach(cell => {
  cell.addEventListener('click', () => {
      let row = cell.getAttribute('data-row');
      let col = cell.getAttribute('data-col');
      let currentEmoji = cell.innerText;
      let nextIndex = (emojis.indexOf(currentEmoji) + 1) % emojis.length;
      if(emojis[nextIndex] == '✅' || currentEmoji == '✅'){
        document.querySelectorAll('.gridCell').forEach(otherCell => {
          if (otherCell.getAttribute('data-row') === row || otherCell.getAttribute('data-col') === col) {
            if(emojis[nextIndex] == '✅' && otherCell.innerText == ''){
              otherCell.innerText = '✖️';
            } else if(currentEmoji == '✅' && otherCell.innerText == '✖️'){
              otherCell.innerText = ''
            }
          }
        });
      }
      cell.innerText = emojis[nextIndex];
  });
});

function loadGame() {
    let datepicker = document.getElementById("datepicker");
    game = new LogicGridPuzzle(new Date(getDatePickerAsString()));
    console.log(game)
    
    //document.getElementById("gameControls").style.display = "block";
    document.getElementById("output").innerHTML = game.playGame();
}

function getDatePickerAsString() {
    //get date from datepicker
    let curr_year = document.getElementById('datepicker').value.split("-")[0];
    let curr_month = document.getElementById('datepicker').value.split("-")[1];
    let curr_date = document.getElementById('datepicker').value.split("-")[2];
    return curr_month + "/" + curr_date + "/" + curr_year;
  }

function getClue() {
    if (!game) {
        alert("Start the game first!");
        return;
    }
    let clue = game.generateClue();
    game.clues.push(clue.details);
    document.getElementById("output").innerHTML += `<p>Clue #${game.clueNumber}: ${clue.text}</p>`;
    game.clueNumber++;
}

function showSolveInputs() {
    document.getElementById("solveInputs").style.display = "block";
}

function solvePuzzle() {
    if (!game) {
        alert("Start the game first!");
        return;
    }
    let suspect = document.getElementById("suspectInput").value;
    let weapon = document.getElementById("weaponInput").value;
    let location = document.getElementById("locationInput").value;
    
    let murderer = game.solution.find(item => item.isMurderer);
    let result = (murderer.suspect.toLowerCase() === suspect.toLowerCase() &&
                  murderer.weapon.toLowerCase() === weapon.toLowerCase() &&
                  murderer.location.toLowerCase() === location.toLowerCase())
                  ? "Congratulations, you solved the puzzle!"
                  : `Oops, wrong answer! The correct solution was: ${murderer.suspect} with the ${murderer.weapon} in the ${murderer.location}.`;
    
    document.getElementById("output").innerHTML += `<p>${result}</p>`;
}
function previousDay() {
    //get the date from the datepicker
    var d = datepicker.valueAsDate;
  
    //subtract 1 day from the date object
    d.setDate(d.getDate());
    //console.log(d);
    document.getElementById('datepicker').value = d.toDateInputValue();
    loadGame()
    // document.getElementById("previousDayBtn").blur();
    // setTimeout(function() {
    //   document.activeElement.blur()
    // }, 500);
  
  }
  function setPuzzleDate() {
    if (Math.floor((new Date() - new Date().getTimezoneOffset()) / (60 * 60 * 24 * 1000)) <= Math.ceil((datepicker.valueAsDate) / (60 * 60 * 24 * 1000))) {
      document.getElementById('datepicker').value = new Date().toDateInputValue();
      return;
    }
    //fourByContainer.innerHTML = '';
    loadGame();
  }


loadGame()

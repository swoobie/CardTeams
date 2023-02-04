var select = document.getElementById("selectpicker");
var cardToTeamMapping = {
	"Honey Badger": 			["TeamA"],
  "Captain Korea":  ["TeamA", "TeamB"],
  "Actual Obama":					  ["TeamA", "TeamB", "TeamC"],
  "Pick Me":					 ["TeamA", "TeamB", "TeamC"],
  "Arnold Corkenswagger":					 ["TeamB", "TeamC"],
  "clint westwood": 	["TeamB", "TeamC"],
  "Rian with an I": 	["TeamC"],
};



$.getJSON("https://swoobie.github.io/config/cardToTeamMapping.json",function(data)
{console.log(data)});


for (const key of Object.keys(cardToTeamMapping)) {
    var opt = key;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}


// intersect the arrays
function intersection() {
	var result = [];
  var lists;
  
  if(arguments.length === 1) {
  	lists = arguments[0];
  } else {
  	lists = arguments;
  }
  
  for(var i = 0; i < lists.length; i++) {
  	var currentList = lists[i];
  	for(var y = 0; y < currentList.length; y++) {
    	var currentValue = currentList[y];
      if(result.indexOf(currentValue) === -1) {
        if(lists.filter(function(obj) { return obj.indexOf(currentValue) == -1 }).length == 0) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
}


var selection = [];

$('.selectpicker').on('change', function() {
  selection = $('.selectpicker').val();
  console.log(selection);
  
  if (selection.length == 4) {
  	console.log("That's enough for a team");
    
    let teams = []
    for (const key of selection) {
    
    	let team = cardToTeamMapping[key];
      teams.push(team);
    }
    
    let intersectionResult = intersection(teams);
    console.log("Possible Teams: " + intersectionResult.toString());
    $('#result').text("Possible Teams: " + intersectionResult.toString());
  }
});

$(function () {
    $('.selectpicker').selectpicker();
});

//THIS RANDOM NUMBER NEEDS TO BE REGENERATED AT START OF EACH GAME AND BE BETWEEN 19-120//

$(document).ready(function() { //    Isnt this needed at top of all .js?

  var wins = 0;
  var losses = 0;
  var numberOptions = Array(4);
  for (var i = 0; i < numberOptions.length; i++) {
    // var random = Math.floor(Math.random() * 9) + 1;
    // numberOptions = random + numberOptions;
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr('id', 'number-'+i);
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    //imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }
   // for (var i = 0; i < 120; i++) {
        // var random = Math.floor(Math.random() * 12);
  //$("#random-number").text("" + targetNumber);
  newGame();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newGame() {
    
    var counter = 0;
    var targetNumber = getRandomInt(19, 120);
    $("#number-to-guess").text(targetNumber);
  //THESE 4 RANDOM NUMBER NEEDS TO BE REGENERATED AT START OF EACH GAME AND BE BETWEEN 1-12//
    numberOptions = [10, 5, 3, 7];

   // I THINK I NEED TO CREATE SEPERATE CRYSTAL IMAGES FOR A TOTAL OF 4 BELOW:
    $('.crystal-image').each(function(i){
      $(this).attr("data-crystalvalue", numberOptions[i]);
    });
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      //$("#crystals").append(imageCrystal);
    //}

    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function() {
      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.   
      counter += crystalValue;  
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      console.log("New score: " + counter);
      if (counter === targetNumber) {
        wins++;
        console.log("You win!");
        newGame();
      }

      else if (counter >= targetNumber) {
        losses++;
        console.log("You lose!!");
        newGame();
      }

      $('#total-score').html(counter);
      $('#wins').html(wins);
      $('#losses').html(losses);
  //NEED HELP WITH CODE BELOW TO UPDATE TOTAL SCORE/WINS/LOSSES MAYBE USE.TEXT CODE?.....
      // var myDivContents = document.getElementById("number-to-guess").innerHTML = html;  
    });

  };

});
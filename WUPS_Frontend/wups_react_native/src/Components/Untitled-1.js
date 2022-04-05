var arr = [
  {
      "player" : "Andre Drummond",
      "team" : "Detroit Pistons",
      "ppg" : "15.4",
      "rpg" : "11.6",
      "apg" : "2.4",
      "bpg" : "1.6",
      "spg" : "0.8",
      "3pg" : "0.1"
  },
  {
      "player" : "Anthony Davis",
      "team" : "New Orleans Pelicans",
      "ppg" : "16.4",
      "rpg" : "13.6",
      "apg" : "2.6",
      "bpg" : "3.5",
      "spg" : "1.2",
      "3pg" : "0.1"
  },
  {
      "player" : "Carmelo Anthony",
      "team" : "New York Knicks",
      "ppg" : "27.4",
      "rpg" : "5.4",
      "apg" : "4.5",
      "bpg" : "1.1",
      "spg" : "1.5",
      "3pg" : "1.6"
  }
  ]
  
  function getMax(arr, prop) {
      var max;
      for (var i=0 ; i<arr.length ; i++) {
          if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
              max = arr[i];
      }
      return max;
  }
  
  var maxPpg = getMax(arr, "ppg");
  console.log("Top scorer: " + maxPpg.player + " - " + maxPpg.team);
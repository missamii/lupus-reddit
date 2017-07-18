$(document).ready(function() {
  console.log("DOM loaded");
  $.ajax({ //the heart of json
      url: "https://www.reddit.com/r/ItsNeverLupus/.json",
      method: "GET",
      dataType: "json",
      success: function(res) {
        // for loop to append data to screen
      }
      //create a delete


    },
    error: function(res) {
      console.log("Can't retreive data");
    }
  });

}); //end ready function

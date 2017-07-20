window.onload = function() {

  $.ajax({
      url: 'https://www.reddit.com/r/ItsNeverLupus/.json',
      type: 'GET',
      dataType: 'json',
      // data: {
      //   param1: 'value1'
      // }
    })
    .done(function(res) {
      console.log("success", res);
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });


}; //end onloaded function

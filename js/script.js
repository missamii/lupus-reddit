window.onload = function() {
  console.log("DOM Loaded"); // dom check!
  // get all elements
  // var favoriteBtn = getElementById('#favorites');
  // var newdiv = getElementById('#createDiv'); // incase I need to create a new Div

  //heart of data
  $.ajax({
      url: 'https://www.reddit.com/r/ItsNeverLupus/.json',
      type: 'GET',
      dataType: 'json',
      // data: {
      //   param1: 'value1'
      // }
    })
    .done(function(res) {
      // console.log("success", res);
      var lupusData = res.data.children;


      console.log("Get the first data obj:", lupusData[0].data);
      console.log("Got the Title:", lupusData[10].data.title);
      console.log("Got the Author:", lupusData[10].data.author);
      console.log("Got the Subreddit:", lupusData[10].data.subreddit_name_prefixed);
      console.log("Got the IMG:", lupusData[4].data.preview.images[0].source.url);






      // for (var i = 0; i < lupusData.length; i++) {}

      // var container = getElementById('#main');
      // var lupusData = res;
      // container.innerHTML = res.container;

    })
    .fail(function() {
      // console.log("error");
    })
    .always(function() {
      // console.log("complete");
    });


}; //end onloaded function

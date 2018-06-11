var tweet = require('twit')
var credentials = require("./credentials.js");

var tweet = new tweet({
	consumer_key:         credentials.consumer_key,
  	consumer_secret:      credentials.consumer_secret,
  	access_token:         credentials.access_token,
  	access_token_secret:  credentials.access_token_secret,
})

/*
** Function to start following people
*/

function startFollow (SN) {
		tweet.post("friendships/create", { screen_name: SN },  function(err, data, response){ })
}

/*
** Function get people's screen names based on trends
*/

function getPeople(trendArray){
	function doCall(index){
	 	tweet.get("search/tweets", {q: trendArray[index]}, function(err,data, response){
			// Get 10 people that tweeted based on the trended words
	 		for(var personIndex = 0; personIndex < 10; personIndex++){
	 			var personSN = data.statuses[personIndex].user.screen_name;
	 			startFollow(personSN);
	 		}
 		})
 	}
 	for(var trendIndex = 0; trendIndex < trendArray.length; trendIndex++){
 		doCall(trendIndex);
 	}
}

/*
** Function to start the bot and get the top 3 trends
*/

function startBot(){
	var listOfTrends = [];
	tweet.get("trends/place", {id: 1}, function(err,data,response){
		// Place list of trends into an array
		for(var index = 0; index < 3; index++){
			var aTrend = data[0].trends[index].name;
			listOfTrends.push(aTrend);
		}
		getPeople(listOfTrends);
	})
}

// Start the bot initally
startBot();

// Run the bot every hour
setInterval(startBot, 3600000 );


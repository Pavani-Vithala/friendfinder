
var path = require("path");
const math = require("mathjs")
var Friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(Friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        Friends.push(newFriend);
        var score = newFriend.scores;
        var pos = compatabilityCheck(score);
       
       
        //console.log("The compatible friend for you is" + Friends[pos].name, Friends[pos].photo);
        
        return res.json(Friends[pos]);

    });

    //Creates the differnce array for the new Friend against existing friends based on his\her answers
    function compatabilityCheck(score) {
        var score = score;
        console.log("The score of the new Friend is " + score);
        var userScore = 0;
        var compScore = [];
        for (var i = 0; i < ((Friends.length) - 1); i++) {
            var frenScore = Friends[i].scores;

            
            for (var j = 0; j < 10; j++) {
                var diff = math.abs(score[j] - frenScore[j]);
                

                userScore = parseInt(userScore) + parseInt(diff);

            }
            compScore[i] = userScore;
            userScore = 0;

        }
        var pos = getCompFriend(compScore);
        return pos;

    }
// Function to get the most compatiable friend position in the array of differences.Friend with least difference will be selected
    function getCompFriend(compScore) {
        var pos = 0;
        var i = 0;
        var j = 1;

        console.log(compScore);
        var len = compScore.length;
       

        while (j < compScore.length) {
            if (compScore[i] < compScore[j]) {

                pos = i;
                j = j + 1;

            } else {

                pos = j;
                i = j;
                j = i + 1;

            }


        }
        
        return(pos);
        //console.log("The compatible friend for you is" + Friends[pos].name, Friends[pos].photo);
    }


}



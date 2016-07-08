$(document).ready(function() {
    var quoteTracker = 0;
    var quotesArr = [{
        quote: "Civilization is a limitless multiplication of unnecessary necessities.",
        topic: "On Civilization..."
    }, {
        quote: "Is it, perhaps, possible that there are two kinds of Civilization... one for home consumption and one for the heathen market?",
        topic: "On Civilization..."
    }, {
        quote: "Civilization largely consists in hiding human nature. When the barbarian learns to hide it we account him enlightened.",
        topic: "On Civilization..."
    }, {
        quote: "There are many humorous things in the world; among them, the white man's notion that he less is savage than the other savages.",
        topic: "On Civilization..."
    }, {
        quote: "The only very marked difference between the average civilized man and the average savage is that the one is gilded and the other is painted.",
        topic: "On Civilization..."
    }, {
        quote: "Every time you stop a school, you will have to build a jail. What you gain at one end you lose at the other. It's like feeding a dog on his own tail. It won't fatten the dog.",
        topic: "On Education..."
    }, {
        quote: "It is noble to teach oneself, but still nobler to teach others... and less trouble.",
        topic: "On Education..."
    }, {
        quote: "Training is everything. The peach was once a bitter almond; cauliflower is nothing but Cabbage with a College Education.",
        topic: "On Education..."
    }, {
        quote: "In the first place God made idiots. This was for practice. Then He made school boards.",
        topic: "On Education..."
    }, {
        quote: "Everything has its limit... iron ore cannot be educated into gold.",
        topic: "On Education..."
    }, {
        quote: "Honesty is the best policy... when there is money in it.",
        topic: "On Honesty..."
    }, {
        quote: "There are people who think that honesty is always the best policy. This is a superstition. There are times when the appearance of it is worth six of it.",
        topic: "On Honesty..."
    }, {
        quote: "Barring the natural expression of villainy which we all have, the man looked honest enough.",
        topic: "On Honesty..."
    }, {
        quote: "Yes, even I am dishonest. Not in many ways, but in some. Forty-one, I think it is.",
        topic: "On Honesty..."
    }, {
        quote: "All my life I have been honest... comparatively honest. I could never use money I had not made honestly - I could only lend it.",
        topic: "On Honesty..."
    }, {
        quote: "Behold the fool saith, \"Put not all thine eggs in the one basket\"... which is but a manner of saying, \"Scatter your money and your attention;\" but the wise man saith, \"Put all your eggs in the one basket and... WATCH THAT BASKET.\"",
        topic: "On Success..."
    }, {
        quote: "All you need in this life is ignorance and confidence, and then Success is sure.",
        topic: "On Success..."
    }, {
        quote: "It is strange the way the ignorant and inexperienced so often and so undeservedly succeed when the informed and the experienced fail.",
        topic: "On Success..."
    }, {
        quote: "Human nature is the same everywhere; it defies success, it has nothing but scorn for defeat.",
        topic: "On Success..."
    }];

    function quoteSequence() {
            var currentInd = quotesArr.length,
                temp, pickMe;
            //while there are elements to shuffle
            while (currentInd !== 0) {
                pickMe = Math.floor(Math.random() * currentInd);
                currentInd--;
                //swap
                temp = quotesArr[currentInd];
                quotesArr[currentInd] = quotesArr[pickMe];
                quotesArr[pickMe] = temp;
            }
        }
        //shuffle the quotes (initial)
    quoteSequence();
    //quote button click
    $('#quoteButton').click(function() {
        $('#quoteHere').fadeOut('slow', function() {
            $('#quoteHere').html(quotesArr[quoteTracker]
                .quote).fadeIn('slow');
        });
        $('#topicHere').fadeOut('slow', function() {
            $('#topicHere').html('<strong>' + quotesArr[
                    quoteTracker].topic +
                '</strong>').fadeIn('slow');
        });
        quoteTracker++;
        //update tweet button text + reload button
        var insertMe = quotesArr[quoteTracker].quote + " - " +
            quotesArr[quoteTracker].topic;
        $('#twitterButton').html(
            '<a class="twitter-share-button" href="https://twitter.com/share" data-url="localhost" data-size="large" data-hashtags="freecodecamp"></a>'
        );
        $('.twitter-share-button').attr('data-text', insertMe);
        twttr.widgets.load();
        //if all quotes have been used, generate new sequence
        if (quotesArr[quoteTracker] === undefined) {
            quoteSequence();
            quoteTracker = 0;
        }
    }); //quote button click
});

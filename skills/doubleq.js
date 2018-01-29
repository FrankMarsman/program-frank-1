var response1;

module.exports = function (controller) {

    controller.hears([/^kebab$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Welcome to the kebab store!');
            
                              console.log("poitn1");
            convo.ask('What would you like on your kebab?', function (response, convo) {
                      console.log("point2");
                convo.say("Here you go, one kebab with " + response.text);
                      console.log("Done saying first thing");
                response1 = response;
                      console.log("Done copying  repsonse");
                convo.next();
                      
            });
            console.log("Try to say sometoidfgnbhkj");
            convo.say("TEST " + response1.text);
            
        });

    });
};

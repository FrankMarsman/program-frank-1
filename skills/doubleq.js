module.exports = function (controller) {

    controller.hears([/^kebab$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Welcome to the kebab store!');

            convo.ask('What would you like on your kebab?', function (response, convo) {
                convo.ask('What else would you like on your kebab?', function (response2, convo) {
                    convo.say("Here you go, one kebab with " + response.text + " and " + response2.text + ". Enjoy!");
                    convo.next();
                });
            });
        });

    });
};

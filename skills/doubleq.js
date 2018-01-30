
module.exports = function (controller) {

    controller.hears([/^kebab$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Welcome to the kebab store!');
            convo.ask('What would you like on your kebab?', function (response, convo) {
                convo.say("Here's your kebab with " + response.text);
                      convo.reply(message,{text: 'Hello', markdown: '*Hello!*'});
                convo.next();
                      
            });
                            
        });
                     
    });
};

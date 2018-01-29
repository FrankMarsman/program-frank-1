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
              this.response1 = response;
                      console.log("Done copying  repsonse");
              console.log("Done copying  repsonse" + this.response1.text);
                convo.next();
                      
            });
                              
                              convo.addQuestion("SOmething else?", function (response, convo) {
                                                convo.say("You said " + response.text);
                                                });
                              

        });
                     
        
          
                     
                     // THIS BELOW DOESNT WORK!!!!
//       bot.startConversation(message, function (err, convo) {
//                             console.log("!! Try to say sometoidfgnbhkj");
//                             convo.say("!! TEST " + this.response1.text);
//                             convo.next();
//
//                             convo.say('Welcome to the kebab store! You ordered ' tis.response.text + "before");
//
//                             console.log("!! poitn1");
//                             convo.ask('What would you like on your kebab?', function (response, convo) {
//                                       console.log("!! point2");
//                                       convo.say("!! Here you go, one kebab with " + response.text);
//                                       console.log("!! Done saying first thing");
//                                       this.response1 = response;
//                                       console.log("!! Done copying  repsonse");
//                                       console.log("!! Done copying  repsonse" + this.response1.text);
//                                       convo.next();
//
//                                       });
//
//
//                             });
                     
                     


    });
};

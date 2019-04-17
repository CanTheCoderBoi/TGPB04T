const discord = require("discord.js");
const request = require("request");
module.exports.run = async (client, message, args) => {

    var başlık = message.conten.split('|')[0];
    var açıklama = message.content.split('|')[1];

    var options = { method: 'POST',
    url: 'https://api.trello.com/1/cards',
    qs: 
     { name: başlık,
       desc: `Bildiren: ${message.author.tag} \n ${açıklama}`,
       pos: 'top',
       idList: '5cb60bee4d82218556ef5f2a',
       urlSource: 'https://trello.com/b/p4h41upt/excalibur-bot',
       keepFromSource: 'all',
       key: 'c109f04909c12b4490be316a6fd957e9',
       token: '13487a32f18d47508bb069a3ccca539dc4992f73b81128782ef19e7d4f443649' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });


}
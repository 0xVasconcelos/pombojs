var telegram = require('telegram-bot-api');
var api = new telegram({
	token: '<>TOKEN<>',
	updates: {
		enabled: true,
		get_interval: 1000
	}
});

api.on('message', function(message){
	var chat_id = message.chat.id;
    if(message.text){
        var text = replaceSpecialChars(message.text.toLowerCase());
        if(text.indexOf("pombo") > -1){
            if(text.indexOf("fala") > -1){
                sendMessages("Fala mano!", chat_id);
            }
            else if(text.indexOf("viado") > -1){
                sendMessages("Ei mano, não sou viado não mano!", chat_id);
            }
            else if(text.indexOf("pru") > -1){
                sendMessages("Pruu! Pruu!", chat_id);
            }
            else if(text.indexOf("dimi") > -1 && text.indexOf("marco") > -1){
                sendMessages("Ei mano! ...", chat_id);
            }
            else if(text.indexOf("burro") > -1){
                sendMessages("Égua mano, não sou burro não mano, tirei bom em Cálculo mano!", chat_id);
            }
            else if(text.indexOf("passou") > -1 && text.indexOf("calculo") > -1){
                sendMessages("Égua mano, passei com Bom em cálculo mano, égua mano. Não tô acreditando mano!", chat_id);
            }
            else if(text.indexOf("qual") > -1 && text.indexOf("email") > -1 && text.indexOf("charles") > -1){
                sendMessages("Égua mano, o email do Charles é esse: cf.hardware.prodrive@gmail.com", chat_id);
            }
            else{
                if(message.from.first_name == "Fillipe"){
                    sendMessages("Fala pai!", chat_id);
                }
                else{
                    sendMessages("Fala " + message.from.first_name + "!", chat_id);
                }
            }
        }
        else if(text.indexOf("pru") > -1){
            sendMessages("Pruu! Pruu!", chat_id);
        }
        else if(text.indexOf("ping") > -1){
            sendMessages("Pong!", chat_id);
        }
        else if(text.indexOf("andre") > -1 && text.indexOf("pai") > -1){
                sendMessages("Égua mano, o André vai ser pai! Parabéns mano!", chat_id);
        }

        else if(text.indexOf("dimi") > -1 && text.indexOf("marco") > -1){
                sendMessages("Égua mano, não acredito que o Marco come o Dimi!!", chat_id);
        }
    }
   if(message.text) 
       console.log("[" + message.from.first_name + " " + message.from.last_name + "@" + message.from.username + "]: " + message.text);
});


function tratarPerguntas(mensagem){
    
}

function replaceSpecialChars(str){
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[éèëê]/,"e");
    str = str.replace(/[íìïî]/, "i");
    str = str.replace(/[óòõô]/, "o");
  	str = str.replace(/[úùûü]/, "u");
    str = str.replace(/[ç]/,"c");
    return str.replace(/[^a-z0-9]/gi,''); 
}


function sendMessages(msg, chat_id){
    api.sendMessage({
        chat_id: chat_id,
		text: msg
        },function(err, message){  
            if(err)
                console.log(err);
    });
}

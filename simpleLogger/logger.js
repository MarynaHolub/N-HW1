const fs = require("fs").promises;

async function logMessage(message) {
  try {
    await fs.appendFile("log.txt", message + "\n");
    console.log("Сообщение записано в лог");
  } catch (err) {
    console.error("Ошибка при записи лога:", err);
  }
}

module.exports = { logMessage };

// const fs = require('fs')

// function logMessage(text){
//     fs.appendFile('log.txt', text + '\n', (err)=>{
//         if (err){
//             console.error(err);
//         }
//     } )
// }

// module.exports = logMessage;
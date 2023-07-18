const fs = require("fs");
// fs.writeFile("message.txt", "Hey there! This is NodeJS.", (err) => {
//     if (err)
//         throw err;
//     console.log("Message Saved Succesfully!");
// });

fs.readFile('message.txt', 'utf8', (err, data) => {
    if(err)
        throw err;
    console.log(data);
});

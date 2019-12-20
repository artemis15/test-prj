const path = require('path');
const fs = require('fs');
const date = require('date-and-time');
let d = new Date();
const currentDate = date.format(d,'DD-MMM-YYYY hh-mm A').toString().slice(0,-1)+" ";
//const currentDate = `${d.getDate()}_${d.getMonth()+1}_${d.getUTCFullYear()}_${d.getHours()}:${d.getMinutes()}`;

let fileName = `result_${currentDate}.json`;
//const jsonfilePath = path.join(path.dirname(process.execPath), '/conf.json');
const writeTextFilePath = path.join(path.dirname(process.execPath), `/${fileName}.json`);

//const jsonfilePath = 'conf.json';
//const writeTextFilePath = path.join(path.dirname(process.execPath), `/${fileName}`);

const writeToFile = (data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) 
        {
            console.log(err);
        }
        console.log("Successfully Written to File.");
      });
 }

module.exports ={
   
    writeToFile : writeToFile
}
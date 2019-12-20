const fi = require('./fielInfo');
const sw = require('./software');

(
    async() => {
       let swI =  await sw.softwares();
       fi.writeToFile(JSON.stringify(swI));
    }
)();
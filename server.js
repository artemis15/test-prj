const fi = require('./fielInfo');
const sw = require('./installedSoftwares');

(
    async() => {
       let swI =  await sw.softwares();
       fi.writeToFile(JSON.stringify(swI));
    }
)();
'use strict';

let _platform = process.platform;
const exec = require('child_process').exec;

const _linux = (_platform === 'linux');
const _darwin = (_platform === 'darwin');
const _windows = (_platform === 'win32');
const _freebsd = (_platform === 'freebsd');
const _openbsd = (_platform === 'openbsd');
const _netbsd = (_platform === 'netbsd');
const _sunos = (_platform === 'sunos');

const NOT_SUPPORTED = 'not supported';

function softwares(callback) {
    return new Promise((resolve) => {
        process.nextTick(() => {
            let result={};
            result.softwareList = [];

            if (_darwin) {
                try {
                    exec("system_profiler SPApplicationsDataType -json", function (error, stdout) {

                        let arrayElements = JSON.parse(stdout).SPApplicationsDataType;
                        for(let i of arrayElements)
                        {
                            let element = i;
                            result.softwareList.push({
                                name: getData(element._name),
                                version : getData(element.version)
                            });
                        }
                        

                        if (callback) { callback(result); }
                        resolve(result);
                    })
                } catch (error) {
                    if (callback) { callback(result); }
                    resolve(result);
                }

            }
        })
    });
}

const getData = (d) => {
    try {
        return d ? d : '';
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    softwares: softwares
}
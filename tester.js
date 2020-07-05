const needle = require('needle');

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(130));
}

async function tester () {
    i=0;
    while (true) {
        time = Date.now();
    
        let speed = getRandomInt();
        let data = `position,device=device1 lat=-34.6049759,lon=-58.4219341,speed=${speed},provider="whatever",accuracy=15.481 ${time}`;
    
        let response = await needle('post','http://localhost:8086/api/v2/write?bucket=geodata&precision=ms', data);
        i++
        console.log(i, time, speed, response.statusCode, response.body)
    }
}

tester()
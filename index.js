const express = require('express');
const bodyParser = require('body-parser');

const needle = require('needle');


const app = express()
app.use(bodyParser.json())

const port = 3000

app.post('/', (req, res) => {
    let speed = (req.body[0].speed != null) ? req.body[0].speed : 0; // to standardize the speed readings
    let data = `position,device=device1 lat=${req.body[0].latitude},lon=${req.body[0].longitude},speed=${speed},provider="${req.body[0].provider}",accuracy=${req.body[0].accuracy} ${req.body[0].time}`; //check this out as influx is super picky with the line protocol
    
    console.log(data)
    
    needle('post','http://influx:8086/api/v2/write?bucket=geodata&precision=ms', data)
    .then(res => console.log(res.body))
    .then(res.sendStatus(200))
    .catch(console.log)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
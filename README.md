# InfluxDB injector

WARNING: I'm not responsible for anything that happens if you this repo or any component of it. If you are running a nuclear plant and for some reason a black hole appears and apocalypse comes IT'S NOT MY FAULT

Welcome to the time series DB world! This project was created to test InfluxDB, Kapacitor and Chronograph with an IoT app sending real time location data.

## Steps

1. Clone this repo
2. Install docker and docker compose if you haven't done so
3. In the directory you clone this repo run "docker-compose up"
4. Send a post request with the following data in its body to http://localhost:3000

    [
        {
            "altitude": 49.5,
            "provider": "fused",
            "bearing": null,
            "latitude": -34.6049759,
            "locationProvider": 0,
            "accuracy": 15.481,
            "time": 1593904550117,
            "radius": null,
            "speed": null,
            "longitude": -58.4219341
        }
    ]

## Tester

In case you need to inject fake data into the database, go ahead and run the tester.js file, it will inject false readings to the database in order for you to see the action

## Auth

Not implemented, this project was just for having some fun during quarantine! nevertheless, it's easy

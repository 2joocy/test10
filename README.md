# Test 10
https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Assignments/10%20CI%20CD%20Assignment.pdf

Made by:

- Chris Rosendorf
- Viktor Kim Christiansen  
- William Pfaffe

## Setup Explained
The program itself is just an excuse to have a setup, it just multiplies the number you give it by 85.


We have a Dockerfile which is setup with chrome(for Puppeteer) and NodeJS. We have a droplet on `http://45.76.91.135/` running a Webhook listening on Github Events `http://45.76.91.135:7777/webhook` when Travis passes all our tests. (Which are simple Jest, and Puppeteer tests). Which formally written would be unit tests, and functional/integration tests.


The "update listener" program is in the update-listener folder, check it out! On the droplet we just have a simple Docker-swarm setup, so you can easily roll back if an update goes bad, or make sure it only updates 1 instance of the program at a time (Currently it runs 2).


When the update listener sees Travis says a build is successfull, it will pull the latest source code, build it and host it. (Continious Deployment).
In a real life scenario you would probably only do this on a staging setup, and manually deploy to production.



When travis runs the tests themselves, it first runs the docker image with `docker run --network mynet --name runner -d -p 127.0.0.1:3000:3000 test10:latest npm start`, making a local instance available, then it runs another instance with `docker run --network mynet --name tester test10:latest npm test `actually testing up again the local server.


So we use the same docker image for everything, and you just give it different parameters if you want to test, or if you want it to point to different IP's.



TLDR: Update-listener listens for Travis builds, if it's good, build a new docker image and update the Docker-swarm service.

## npm & Jest Compared To Maven / JUnit
We were unable to find the equavalent to Maven Goals. However, we could simulate this using jest sequences, running specific files via our package file. 



### Installation

- Clone Repository
- Ensure NodeJS is installed and working on system
- Open another terminal, first run `npm i`
- In that same terminal, run `npm start`

## Travis CI
https://travis-ci.org/BingoBois/test10

## CD Status
http://45.76.91.135:7777/webhook

Or run the Dockerfile.


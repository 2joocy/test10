#!/bin/bash
docker build -t test10:latest .
docker network create mynet
docker run --network mynet --name runner -d -p 127.0.0.1:3000:3000 test10:latest npm start 
docker run --network mynet -e FRONT_URL='runner' --rm --name tester test10:latest npm test 

# For manual testing
# docker build -t test10:latest . && docker run -e FRONT_URL='runner' --rm -it --network mynet --name tester test10:latest bash 
sudo docker build -t test10:latest /root/test10/
sudo docker service create --replicas 2 --name test10 --publish published=80,target=3000 --update-delay 5s test10:latest npm start

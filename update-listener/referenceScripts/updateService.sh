cd /root/test10
git pull
sudo docker build -t test10:latest .
sudo docker service update --force --image test10:latest test10

#!/bin/bash
sudo aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 376129854991.dkr.ecr.ap-south-1.amazonaws.com
sudo docker rm -f $(sudo docker ps -q -a --filter "name=backend-app")
sudo docker rmi -f $(sudo docker images "376129854991.dkr.ecr.ap-south-1.amazonaws.com/backend-app:latest" -q)
sleep 3
sudo docker pull 376129854991.dkr.ecr.ap-south-1.amazonaws.com/backend-app:latest
if [[ $? != 0 ]]
then
    sudo aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 376129854991.dkr.ecr.ap-south-1.amazonaws.com
    sudo docker pull 376129854991.dkr.ecr.ap-south-1.amazonaws.com/backend-app:latest
fi
sudo docker run -d -p 8080:8080 --name backend-app 376129854991.dkr.ecr.ap-south-1.amazonaws.com/backend-app:latest

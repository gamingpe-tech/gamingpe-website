#!/bin/bash
sudo aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 376129854991.dkr.ecr.ap-south-1.amazonaws.com/gamingpe-website
sudo docker rm -f $(sudo docker ps -q -a --filter "name=gamingpe-website")
sudo docker rmi -f $(sudo docker images "376129854991.dkr.ecr.ap-south-1.amazonaws.com/gamingpe-website:latest" -q)
sleep 3
sudo docker pull 376129854991.dkr.ecr.ap-south-1.amazonaws.com/gamingpe-website:latest
if [[ $? != 0 ]]
then
    sudo aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 376129854991.dkr.ecr.ap-south-1.amazonaws.com
    sudo docker pull 376129854991.dkr.ecr.ap-south-1.amazonaws.com/gamingpe-website:latest
fi
sudo docker run -d -p 80:80 -p 443:443 --name gamingpe-website -v /home/ec2-user/ssl:/etc/nginx/conf.d/ssl 376129854991.dkr.ecr.ap-south-1.amazonaws.com/gamingpe-website:latest

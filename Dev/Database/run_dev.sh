#!/bin/bash

IMAGE_NAME='dev_db_mycertificate_image'
CONTAINER_NAME='dev_db_mycertificate'
PORT='3306'

docker stop dev_db_mycertificate
docker rm dev_db_mycertificate
docker build -f Dev/Database/Dockerfile -t dev_db_mycertificate_image .
docker run -d -p 3306:3306 --name=dev_db_mycertificate dev_db_mycertificate_image

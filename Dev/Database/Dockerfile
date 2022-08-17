FROM mysql:latest

RUN mkdir /dev_db
WORKDIR /dev_db

ENV MYSQL_DATABASE=mycertificate
ENV MYSQL_ROOT_PASSWORD=passwd
ENV MYSQL_USER=dev
ENV MYSQL_PASSWORD=root
ENV DB_HOST=127.0.0.1

#COPY ./Dev/Database/dump.sql dump.sql

ADD ./Dev/Database/dump.sql /docker-entrypoint-initdb.d

EXPOSE 3306
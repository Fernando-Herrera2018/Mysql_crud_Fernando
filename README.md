# Creation CRUD (post, get, put delete)

## Installing dependencies

``npm install``

## View environment

* Read file .env.example

## Create the file .env

* Using the file .env.example create ur variables

## Create the container

``docker run --name mysql-5.6 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.6``

## Execute the container

``docker exec -it mysql-5.6 mysql -p``

## Do ur job

* Enter ur password

## Use the comands for the create of database

`show databases;`

`create database NameOfBD;`

`use NameOfBD;`

`create table NameTable (id int(#) primary key  auto_increment, name varchar(#), lastname varchar(#));`

## To se ur table do

`describe NameTable;`

## Docker thing

`docker-compose up`










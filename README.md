# Blacksmith Test API

## Summary

### Overview

 - [Set up](#set-up)
	 - [Install docker](#install-ocker)
	 - [Database](#database)
	 - [Install api](#install-api)
 
### API Rules
 - [Users](#users)
	 - [Listing users](#listing-users)
	 - [Get one user](#get-one-user)
	 - [Create user](#create-user)
	 - [Update user](#update_user)
	 - [Delete user](#delete-user)
- [Spots](#spots)
	- [Get free spots](#free-spots)
	- [Update spots](#update-spot)
	- [Create spot](#create-spot)
	- [Delete spot](#delete-spot)

## Set Up

### Install docker
- Go to this link [how to install docker](https://docs.docker.com/install/)
- Start docker services
	- Linux	:  ```sudo service docker start```
	- Mac & Windows: Click on the shourtcut icon folder
- Check if docker is started
	```docker --version```

### Database
- Create postgresql container in detached mode on port 5432:
	 ``` docker run -d -p 5434:5432 --name blacksmith_test postgres:alpine```
- Go into the container on bash mode:
	```docker exec -it blacksmith_test /bin/bash```
- Connect to postgres with default user:
```psql -U postgres```
- Create user blacksmith with encrypted password:
```create user blacksmith with encrypted password 'blacksmith' superuser createdb createrole login;```
- Create blacksmith database
```create database blacksmith;```

## Install api
- Clone the project and go into the project folder:
```git clone https://github.com/myssass/blacksmith_test.git && cd blacksmith_test/```
- Install all dependencies:
```npm install```
- Create the dev database:
```sequelize db:create```
- Stock up the database with migration:
```sequelize db:migrate```
- Start server:
```npm run start:dev```

##  API Rules

### Users

#### Listing users
- Http method : ```GET```
- Url: ```localhost:3000/api/users```
- Return ```{All Users}```

#### Get one user
- Http method: ```GET```
- Url : ```localhost:3000/api/user/:user_id```
- Url params: ```:user_id => Integer```
- Return: ```{User + {User Spot} }```

#### Create user
- Http method: ```POST```
- Url : ```localhost:3000/api/user/```
- Params: ```firstname => string, lastname => string, admin => boolean``` 
- Return: ```{User}```

#### Update user
- Http method: PUT
- Url : ```localhost:3000/api/user/:user_id```
- Url params: ```:user_id => Integer```
- Params: ```firstname => string, lastname => string, admin => boolean```
- Return: ```{User}```

#### Delete user
- Http method: ```DELETE```
- Url : ```localhost:3000/api/user/:user_id```
- Url params: ```:user_id => Integer```

### Spots

#### Get free spot
- Http method: ```GET```
- Url: ```localhost:3000/api/spot/free```
- Return: ```{Spots}```

### Create spot
- Http method: ```POST```
- Url: ```localhost:3000/api/spot/:user_id'```
- Url params: ```:user_id => Integer```
- Params: ```floor => String, occupency => boolean```

#### Update spot
- Http method: ```PUT```
- Url:```localhost:3000/api/spot/:spot_id/user/:user_id```
- Url params: ```:spot_id => Integer, user_id => Integer```
- Params: ```floor => string, occupency => boolean``` 
- Return ```{Spot}```

#### Delete spot
- Http method: ```Delete```
- Url: ```localhost:3000/api/spot/:spot_id```
- Url params: ```:spot_id => Integer```

# ENJOY :)

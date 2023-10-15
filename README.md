# Effective

## Install
```cd user && npm install && cd ../history && npm install && cd ..```
## Run database

```sudo docker-compose up```
## Run user service

```cd user && npm run start:dev```
## Run history

```cd history && npm run start:dev```
## Api reference

### POST /users/create
  Body: {
    username: string,
  	password: string,
    email?: string
}
### PUT /users/update
  Body: {
    username: string,
  	password: string,
    email?: string
  }
### GET /users/getAll
### GET /history/get 
  Query params: {
    user_id?: string | number;
    page?: string | number;
    show_by?: string | number;
}

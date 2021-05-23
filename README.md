## Reactjs code to integrate Razorpay with Nodejs backend.

## Features
- Create order from backend
- Pay using Reactjs frontend and update the transactions in DB

## Tech

This project uses a number of tech:

- ReactJs
- NodeJs Express
- MongoDB

## Installation

This project requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start

cd client
npm start
```

For environment variables put the keys in `.env` file

```sh
RAZORPAY_SECRET=<your razorpay secret>
RAZORPAY_KEY_ID=<your razorpay ket id>
MONGO_USERNAME=<your username>
MONGO_PASSWORD=<your password>
MONGO_DB_NAME=<your collection name>
```

## Plugins

Instructions on how to use them in the application are linked below.

| Plugin 
| ------ 
| cors | 
| crypto |
| dotenv |
| express |
| mongoose |
| razorpay |
| axios |

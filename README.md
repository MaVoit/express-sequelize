## REST API

Oh what a lovely day it is.

## Setup local db

    docker-compose up -d

## Setup Environment

    cp .env.example .env

## Setup API

    npm install
    npm run migrate

## Setup Webstorm

    Languages & Frameworks > JavaScript > ECMAScript6 
    Languages & Frameworks > JavaScript > Code Quality Tools > ESLint: Enable
    
## Running Migrations

    npm run migrate
    
## Running app locally
    
    npm run dev
    
## Running app in production
    
    npm run start
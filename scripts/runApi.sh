#!/bin/bash

# Starts the pre-compiled node app

[ -z "$NODE_ENV" ] && NODE_ENV="development"

nodemon ./build/api.js

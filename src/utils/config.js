import dotenv from "dotenv-safe";

const config = {};
Object.keys(dotenv.config().required).forEach((key) => {
    config[key] = process.env[key];
});

export default config;

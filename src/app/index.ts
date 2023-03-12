import express, { Application } from "express";
import cors from 'cors';
import {document} from '@swagger/swagger'
import  swaggerUi from 'swagger-ui-express'
import config from "@config/index";
import youtubeRouter from "@routes/youtube/router";

const app:Application = express();

app.use(cors())


let options = {
    swaggerOptions: {
        validatorUrl: null
    },
    customCssUrl: '/public/css/swagger-ui.css'
};

document.host = process.env.NODE_ENV === 'development' ? `${config.server.host}:${config.server.port}`: `${config.server.host}`
document.basePath = `/`

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(document, options));

app.use('/youtube',youtubeRouter)

export default app;

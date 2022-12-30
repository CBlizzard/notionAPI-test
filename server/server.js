import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import { submitForm } from './controller.js'


const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>res.json({data:"hey, hey, hey"}))
app.post('/submitForm', submitForm)


app.listen(PORT, () => {
    console.log( `listening 🦻 on port ${PORT}!!  ` );
 })

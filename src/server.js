import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";
import cors from 'cors';
import modules from "./modules/index.js";
import fileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(modules);

app.listen(PORT, () => console.log(`server ready at http://localhost:${PORT}`));
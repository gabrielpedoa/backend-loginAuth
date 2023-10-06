import express from 'express'
import cors from 'cors';
import router from './router.js';


const app = express();
const port = 3000;
app.use(cors({ credentials: true, origin: ["*", "https://gabrielpedoa-loginauth-raquel.netlify.app"] }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router())

app.listen(port, () => {
	console.log(`server is running on ${port}`);
})


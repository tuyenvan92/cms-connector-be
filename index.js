const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();
const userRoute = require('./routes/userRoute')
dotenv.config()
app.use(cors());
const PORT = process.env.PORT || 3000

app.use(express.json({ extend:true}));
app.get('/', (_,res) => res.send('API running'));

app.use('/api/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server up and running localhost: ${PORT}`)
});

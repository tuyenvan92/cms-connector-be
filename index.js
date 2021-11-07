const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 3005

app.use(cors());

console.log(1234567)

//route
const userRoute = require('./routes/userRoute')

app.use(express.json({ extend:true}));
app.get('/', (_,res) => res.send('API running'));

app.use('/api/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server up and running localhost: ${PORT}`)
});

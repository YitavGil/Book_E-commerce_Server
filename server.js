require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');




const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/books', require('./routes/booksRouter'))
app.use('/review', require('./routes/reviewRouter'))
app.use('/genres', require('./routes/genreRouter'))
app.use('/upload', require('./routes/upload'))
app.use('/payment', require('./routes/paymentRouter'))

//connect to mongoDB
const URI = process.env.MONGO_URI
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB');
})

const publicPath = path.join(__dirname, 'build');
app.use(cors());
app.use(express.static(publicPath));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
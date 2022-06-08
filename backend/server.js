// import
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import adminRoute from './routes/api/admin.js';
import authorRoute from './routes/api/author.js';
import bookRoute from './routes/api/book.js';
import categoryRoute from './routes/api/category.js';

// app config
dotenv.config({ path: '.env' });
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static path
app.use(express.static('public'));
app.use('/img', express.static('img'));

// DB config
connectDB();

// api routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to server' });
});

app.use('/admin', adminRoute);
// localhost:3001/admin/ to get all data admin
// localhost:3001/admin/register to register admin
// localhost:3001/admin/login to admin login
app.use('/author', authorRoute);
app.use('/book', bookRoute);
app.use('/category', categoryRoute);

// linsten
app.listen(port, () => {
    console.log(`Library server running on http://127.0.0.1:${port}`);
});

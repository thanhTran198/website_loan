const path = require('path')
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const db = require('./config/db');
const blogsController = require('./routes/blogs');
const route = require('./routes/index')

// test đăng nhập

const session = require('express-session')
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
app.use(session({
secret: 'adsa897adsa98bs',
resave: false,
saveUninitialized: false,
}))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session());

// kết thúc test đăng nhập

// connect to db
db.connect();

app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('combined'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`ứng dụng đã chạy trên cổng ${port}`);
});
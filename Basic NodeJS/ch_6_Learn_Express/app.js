const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET || 'secret'));
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || 'secret',
    cookie: {
      httpOnly: true,
      secure: false,
    },
    // name: 'session',
  })
);
app.use('/', (req, res, next) => {
  if (req.session.id) {
    express.static(__dirname, 'public')(req, res, next);
  } else {
    next();
  }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // true = qs, false = querystring
// app.use('Request Route', express.static(path.join(__dirname, 'Real Route')));
// app.use(morgan('combined'));

app.use((req, res, next) => {
  console.log('Run about All Request');
  next();
});

app.use(cookieParser('cafe43'));

app.get('/', (req, res) => {
  // req.cookies
  // req.signedCookies;
  //   req.cookie('name', encodeURIComponent(name), {
  //     expires: new Date(),
  //     httpOnly: true,
  //     path: '/',
  //   });

  //   res.clearCookie('name', encodeURIComponent(name), {
  //     httpOnly: true,
  //     path: '/',
  //   });

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.status(200).send('Hello Express!');
});

app.use((req, res, next) => {
  res.status(404).send('404!');
});

app.use((error, req, res, next) => {
  console.log(error);
  res.send('Error: ' + error);
});

app.listen(app.get('port'), () => {
  console.log('Express listening on port 3000!');
});

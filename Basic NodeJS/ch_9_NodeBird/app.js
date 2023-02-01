const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
// TODO : Using React or Vue
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config(); // process.env
const pageRouter = require('./routes/page');
const { sequelize } = require('./models');

const app = express();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

sequelize
  //   .sync({ force: false })
  .sync({ force: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.err(err);
  });

app.use(morgan('dev'));
// TODO : Prod >> app.use(morgan('combinded'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// RestAPI form request handler
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      // TODO : After https Setting
      secure: false,
    },
  })
);

app.use('/', pageRouter);
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} Not Found`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') !== 'production' ? err : {};
  res.status(error.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'Port Node Server is running');
});

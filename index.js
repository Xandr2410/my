const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./router');
const apiRouter = require('./router-api');

app.use((req, res, next) => {
  res.locals.req = req;
  res.locals.user = req.user;

  next();
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
/*app.use(session({
    secret: 'oursercret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: false,
        path: '/',
        maxAge: 100 * 24 * 60 * 60 * 1000,
      },
  }));*/
app.use(
  session({
    secret: 'secretword',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);
app.use('/api', apiRouter);

/*

app.use(
    session({
        secret: "secretword",
        store: new fileStore(),
        cookie: {
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false
    })
)
*/

app.listen(process.env.PORT || 3000);

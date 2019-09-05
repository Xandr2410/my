const { Router } = require('express');
const apiRouter = new Router();

const passport = require('passport');

apiRouter.post('/signin', (req, res, next) => {
  passport.authenticate('signin', (authenticateError, user, info) => {
    if (authenticateError) {
      next(authenticateError);
      return;
    }

    if (info && info.message) {
      return res.status(400).send({
        // return чтобы дальше не гшла функция
        status: 'доступ не разрешен',
        error: info.message,
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      res.send({
        status: 'доступ разрешен',
      });
    });
  })(req, res, next);
});
//Регистрация пользователя
apiRouter.post('/signup', (req, res, next) => {
  passport.authenticate('signup', (authenticateError, user, info) => {
    if (authenticateError) {
      next(authenticateError);

      return;
    }

    if (info && info.message) {
      return res.status(400).send({
        status: 'доступ не разрешен',
        error: info.message,
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        next(err);

        return;
      }
      res.send({
        status: 'пользователь зарегистрирован',
      });
      //res.redirect(`back`);
    });
  })(req, res, next);
});

module.exports = apiRouter;

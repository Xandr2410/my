const { Router } = require('express');
const router = new Router();
const { Op } = require('sequelize');

const Films = require('./config/database/dbFilms');
console.dir(Films);
//const { Op } = require('./config/database/dbFilms');

//const passport = require('passport');
//require('./config/config-passport');

//const bodyParser = require('body-parser')
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Отображаем фильмы на главной странице из бд
router.get('/', function(req, res) {
  Films.findAll({
    raw: true,
    attributes: ['id', 'link'],
    where: { id: { [Op.gt]: 0 } },
  })
    .then((data) => {
      res.render('index', {
        auth: req.isAuthenticated(),
        data: data,
      });

      console.log(data);
    })
    .catch((err) => console.log(err));
});

router.get('/movie/:id', function(req, res) {
  let idPage = req.params.id;
  Films.findOne({
    raw: true,
    attributes: ['link'],
    where: { id: idPage },
  }).then((idPage) => {
    res.render('movie', {
      idPage: idPage,
    });
    console.log(idPage);
  });
});

//app/
// index.js
//  // router либо файл, либо папка
//   views/
//   models/
//   controllers/
//я понял вас, структуру я понменяю, сделаю films-- routes
//сек, туплю
/*
  router.post('/signin', (req, res, next) => {
  passport.authenticate('signin', (authenticateError, user, info) => { 
    
    if (authenticateError) {
      next(authenticateError);
      return;
    }

    if (info && info.message) {
      res.render('index', {
        errorMessage: info.message,
        
      });
      console.log(info.message);
      
      return;
      
    }

    req.logIn(user, (err) => {
      if (err) {
        next(err);
        
        return;
      }

      res.redirect(`/`);
      //console.log(user.username);
    });
  })(req, res, next);
});
*/
//разлогиневание пользователя

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('back');
});

router.get('/test', (req, res) => {
  res.render('test');
});

/*function validAuth(req, next){
  if(req.isAuthenticated()){
    var Auth;
    next();
  }else{
    var notAuth;
    next();
  }
}
*/

module.exports = router;

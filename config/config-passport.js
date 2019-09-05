const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Users } = require('./database/dbUsers');

passport.serializeUser((user, done) => {
  //console.log('Серилизация' + user.id)
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    //console.log(id);
    const user = await Users.findByPk(id);
    //console.log('Десериализация' + user);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  'signin',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      //console.log(email,password);
      try {
        const user = await Users.findOne({
          where: { username },
        });

        if (!user) {
          done(null, false, {
            message: 'Не верный логин', // и эта тоже самое info.message, не могу их чет принять

            // Better
            // message: 'Incorrect email or password'
          });

          return;
        }

        if (user.password !== password) {
          done(null, false, {
            message: 'Не верный пароль', // это выдает та переменная info.message
            // Better
            // message: 'Incorrect email or password'
          });

          return;
        }

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const findUser = await Users.findOne({
          where: { username },
        });

        if (findUser) {
          done(null, false, {
            message: 'Имя пользователя занято',
          });

          return;
        }

        let email = req.body.email;
        console.log(email);
        const user = await Users.create({
          password,
          username,
          email,
        });

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

const passport = require('passport');
const conf = require('../config/passport');

module.exports = router =>{
    router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );

    router.get('/auth/google/callback', passport.authenticate('google'), (req, res)=>{
        res.redirect('/');
    });

    router.get('/auth/current-user', (req, res, next)=>{
        if(req.user){
            res.json({user: req.user});
        }else{
            res.json({user: false});
        }
    });

    router.get('/auth/logout', (req, res, next)=>{
        req.logout();
        res.redirect("/");
    })
}
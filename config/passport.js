'use strict';
const User = require('../models/user.model');
const passport = require('passport');
const secret = require('./secret');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
    .exec(function(err, user) {
        done(err, user);
    });
});

passport.use(
    new GoogleStrategy(
      secret.google, async(accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
         
        if (existingUser) {
          return done(null, existingUser);
        }
      
              let user = new User({                
                googleId: profile.id,
                profile: profile._json, 
                picture: profile._json.image.url,
                displayName: profile._json.displayName           
          });        
          user.save(err=>{
              if(err){return done(err)}
              done(null, user);
          });
            
      }
    )
  );

exports.isAuthenticated = function(req, res, done) {
    if (req.isAuthenticated()) {
        return done();
    }
    res.json({ message: 'Unauthenticated' });
}

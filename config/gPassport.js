const config = require('./google');

const GoogleOAuthStrategy = require('passport-google-oauth20').Strategy;
module.exports = (passport) => {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
  passport.use(new GoogleOAuthStrategy(
      {
        clientID: config.gClientID,
        clientSecret: config.gClientSecret,
        callbackURL: config.gCb,
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
      },
      (token, refreshToken, profile, done) => done(null, {profile, token})));
};
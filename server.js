const express = require('express'),
helmet = require('helmet'),
morgan = require('morgan'),
cors = require('cors'),
cookieSession = require('cookie-session'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
passport = require('passport'),
secret = require('./config/secret'),
path = require('path');

const app = express();

 mongoose.connect(secret.database, {useNewUrlParser: true}, (err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("connected");
});

app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors({origin: ["http://localhost:3000", "http://localhost:3001"], credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [secret.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

/*Routes*/
require('./routes/auth.route')(app);
var categoryRoutes = require('./routes/category.routes');
var articleRoutes = require('./routes/articles.routes');

//Using the endpoint results.
// app.use(userRoutes);
app.use(categoryRoutes);
app.use(articleRoutes);

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.listen(secret.port, ()=>{
    console.log("listening on port " + secret.port);
});

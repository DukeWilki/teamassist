const express = require("express");
const session = require("express-session");
// const bodyParser = require("body-parser"); // form data   // multer
// const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const passport = require("passport");
const connectDb = require("./config/database");
// const MongoStore = require("connect-mongo")(session);
const routes = require("./routes/api");
// const loginroutes = require("./routes/api_login");
const certlistroutes = require("./routes/api_certlist");
const memberlistroutes = require("./routes/api_memberlist");
const recordlistroutes = require("./routes/api_recordlist");
const profilelistroutes = require("./routes/api_profilelist");
const newroutes = require("./routes/api_new");
const addrecordroutes = require("./routes/api_addrecord");
const updaterecordroutes = require("./routes/api_updaterecord");
const updatememberroutes = require("./routes/api_updatemember");

// // RESET TABLES ON INITIAL LOAD
// const db = require('./models/index');
// db.sequelize.sync({force: true});



const app = express();
connectDb();
// Configure body parsing for AJAX requests
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser(process.env.SESSION_SECRET));
// app.use(cors(corsConfig));
const PORT = process.env.PORT || 3001;
const port = process.env.PORT || 4000;
app.listen(port);
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// app.use(
//     session({
//         resave: true,
//         saveUninitialized: true,
//         secret: process.env.SESSION_SECRET,
//         cookie: {
//             secure: false, // not using https
//             maxAge: 1209600000,
//         }, // two weeks in milliseconds
//         store: new MongoStore({
//             url: process.env.MONGODB_URI,
//             autoReconnect: true,
//         }),
//     })
// );

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
  });


app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
// app.use("/api", passportConfig.authenticate('local'));
app.use('/api',  routes);
// app.use('/api',  loginroutes);
app.use('/api',  certlistroutes);
app.use('/api',  memberlistroutes);
app.use('/api',  recordlistroutes);
app.use('/api',  profilelistroutes);
app.use('/api',  newroutes);
app.use('/api',  addrecordroutes);
app.use('/api',  updaterecordroutes);
app.use('/api',  updatememberroutes);

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
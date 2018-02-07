'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const httpProxy = require("http-proxy");
const expressReactViews = require("express-react-views");
const controller_1 = require("./controller");
const app = express();
const proxy = httpProxy.createProxyServer();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', controller_1.default);
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            title: 'error',
            message: err.message,
            error: err
        });
    });
}
app.use((err, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
        title: 'error',
        message: err.message,
        error: {}
    });
});
exports.default = app;
//# sourceMappingURL=expressConfig.js.map
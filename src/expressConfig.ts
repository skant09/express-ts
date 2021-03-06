'use strict';

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as httpProxy from 'http-proxy';
import * as expressReactViews from 'express-react-views'
import index from './controller';

const app: express.Express = express();
const proxy: httpProxy = httpProxy.createProxyServer();
//view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine({
  transformViews:false,
  babel: {presets: ['react', [ 'env', {'targets': {'node': 'current'}}]]}
}));

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',index);

//catch 404 and forward to error handler
app.use((req,res,next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

//error handlers

//development error handler
//will print stacktrace
if(process.env.NODE_ENV === 'development') {
  app.use((err: Error,req,res,next) => {
    res.status(err['status'] || 500);
    res.render('error',{
      title: 'error',
      message: err.message,
      error: err
    });
  });
}

//production error handler
// no stacktrace leaked to user
app.use((err: Error,req,res,next) => {
  res.status(err['status'] || 500);
  res.render('error',{
    title: 'error',
    message: err.message,
    error: {}
  });
});

export default app;

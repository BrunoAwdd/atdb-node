import express from 'express';

//Web3
const provider = 'https://evmexplorer.velas.com/rpc';
const Web3 = require('web3');

//Abi
const wagyuAbi = require('./config/abi/ERC20.js');
const wagyuAddress = '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351';

declare global {
  namespace NodeJS {
    interface Global {
      web3: any;
      ercContract: any;
    }
  }
}


global.web3 = new Web3(provider);
global.ercContract = new global.web3.eth.Contract(wagyuAbi, wagyuAddress, { gas: 3000000 })

require('dotenv').config({path: __dirname + '/.env'})

const app = express();

const methods = require('methods'),
    session = require('express-session'),
    cors = require('cors'),
    errorhandler = require('errorhandler'),
    ejs = require('ejs');

let isProduction = process.env.NODE_ENV === 'production';

interface ErrorCustom {
  new(message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
  status: number;
}


//Config App
app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));


app.use('/', require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = { message: "Not Found", status: 400 } as unknown as ErrorCustom;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err: any, req: any, res: any, next: any) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err: any, req: any, res: any, next: any) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3500, function(){
  // @ts-ignore
  console.log('Listening on port ' + server.address().port);
});

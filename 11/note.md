## Ajker class a amra shikhbo kivabe express js diye project setup korte hoi:
- ## Jate 2/3 bochor por o amader code pore bujte pre tar jonno amader akta standard follow kore project setup korte hoi.
- ## Express js k oder documentation a bola hocce ota framework. Akhon amra 2ta word er sathe porichito: 1ta hocce framework, r ekta hocce library. Jemon React k bola hoi library and NextJS k bola hoi framework. Framework a rule strict thakbe jmn framework a jodi bola thake kono specified kora namer folder thakte hobe tahole sheta must thaktei hobe. library er kethre kicu kicu jaigai coder er independence ache. Express js k amra jodio project a library er moto use korte pari but oder documentation ata k framework bola ache. Taile ata akta framework. Jta use kore amra kuv simply backend project banate pari, simply bolte bujacci nodejs a j project korte gele amader 100 line code likha lagbe sheta amra expressjs diye 10 line a kore felte pari tai simple bola.
## ExpressJS Project setup korer jonno:
- ### first a `npm init --y` terminal a run koriye `package.json` file create koro. Package.json project related meta data thake: j amr project a ki ki dependenci ache na ache etc.
- ### Akhon amra bibinno package install korbo:
    - ### Amra project korbo expressjs a tai first a express install korbo. Akhon aikhane package manage korer jonno amra `yarn` use korbo. `npm` and `yarn` er kaj eki but `yarn` claim kore j `yarn` diye package install korle shegula beshi secure hoi. Tai ami `yarn add express` terminal a run koriye express install kore nibo.
    - ### Akhon amader besh kicu package install korbo. Jgula amra futer a use korbo. Aikhane shegula intall korer command and aktu brief dicci:
        - ### `yarn add cookie-parser` Cookie-parser is a middleware for Express that parses cookies attached to client requests, making them easily accessible in your application.
        - ### `yarn add cors` CORS (Cross-Origin Resource Sharing) is a middleware for Express that enables controlled access to resources from different origins. Jmn ami akta api endpoin apnake dici.Akhon apni sheta apnar browser tekhe access korben, akhon apner browser r akta origin er jinish, and amr api endpoint r akta different origin. Akhon apni j amr api endpoint a hit korle data tikmoto pan shei setup er jonno CORS use hoi.
        - ### `yarn add express-rate-limit` dorun ami apnake akta endpoint diye dilam, apni proti minute a 1 million bar oi endpoint a hit korcen, tahole ami bujhe jabo apnar akta karaf intention ache. Ami chaile ai package er help a apni koi ber request korte parben sheta limite kore dite pari.
        - ### `yarn add helmet`
        - ### `yarn add hpp` helmet and hpp request header er security maintain korte use hoi.
        - ### `yarn add jsonwebtoken`  atar thorughte kono data patale oi data encrypted hoye jai.
        - ### `yarn add mongoose` ata akta odm(object document mapper). Ata diye Database er data k onkta OOP concept er upor base kore use korte pari. Ata diye detail mongodb class a dekhbo.
        - ### `yarn add nodemailer` Dorun apner website a akat contact us form ache.User jokon form fillup kore send korbe tokon mail ta jate apner mail a ashe instantly, shetar jonno ai package use korte hobe. 
        - ### `yarn add nodemon` realtime a code a change hole server automatically chanage k adopt kore re-run hoi tar jonno ata use korte hobe.
    - ### Akhon jodi apni package.json file ta dekhen tahole dekben amra amader project er jonno onkgula dependency add kore niyechi:
```javascript

//package.json

{
  "name": "11",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "express-rate-limit": "^7.5.0",
    "helmet": "^8.0.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.3",
    "nodemailer": "^6.9.16",
    "nodemon": "^3.1.9"
  }
}
```
- ### `yarn.lock/package.lock` file er kaj hocce onno ekjon manush jokon apner project run korbe package gula jathe apni j version use kore project ta banaichen shei exact version eri package jathe oi manush ta run koranor somoy download hoi. 
- ### Akhon amra akta backend project er standard architecture shommondhe janbo ba kivabe folder er structure ta banale amader jonno shubidha hoi:
    - ### Amra akhon terminal command diye folder banabo and sathe bole dibo oi folder a ki thakbe:
        - ### `mkdir config` - Er agher tutorial gulathe amra server run korechi vibinno port a. Akhon ai port number k guchiye rakhar jonno ai folder use hoi. Tarpor, ami jodi rate limit kori, j 1 hour a kono user 60 barer beshi request korte parbe na. Ai dhoroner constant info gula jgula directly amadher code er moddhe directly use hoi na shegula k store korer jonno config file use hoi. Aikhane value gula store korer shubidha hocce ami jodi ai file a value ta change kori tahole onnanno sob jaigai change jkhane value ta use hoice shei shob jaigai automaticlly update hoye jabe.
        - ### `mkdir controllers` shojha kothai amra er moddhe method ba function likhi.
        - ### `mkdir midddlewares` aikhane middleware gula likha hoi.
        - ### `mkdir models` databaser structure ta ki doroner hobe sheta model a bolte hoi.
        - ### `mkdir utility` Apni jokon kono website er `forget password` a click korle akta mail jai, account verification er jonno mail jai ai j kaj gula hoi aidhoroner barthi kaj gular function rakhar jonno ata use hoi.
        - ### `mkdir routes` routes gula thakbhe.
    - ### Ei folder gular bananor karon hocce akta standard backend project sheta apni jei language e koren/ jei framework a koren na kno motamuti sobjaigai ai folderstructure tai maintain kore.
    - ### Akhon ami akta root file baniye nibo `app.js`. atar name apni `index.js` o dite paren.
 - ### Ai dhoroner kaj bujar jonno `To do list` project a kaj kora. Cause ei project a CRUD kothe hoi. Orthad Database er main operation shob gula ai project er maddhome kora jai. Toh ai `To do` project er throughtei amra dekthe parbo j aikhane controller a ki likhci,models a ki likchi,routes a ki likchi,utility te ki likchi - Taholei amader understanding ta r o clear hoye jabe. So aikhane amra todo app make kore(actual todo app na todo app er functionality er poribhorte console.log korabo, nicher code dekhle r o valo bujte parba.) backend er standard file structuer shomporkhe practical darona niye nibo:
 ```javascript
 //package.json
 {
  "name": "11",
  "version": "1.0.0",
  "description": "",
  "type": "module",//JS er "import syntax" use korte parbo ai property dile.
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "express-rate-limit": "^7.5.0",
    "helmet": "^8.0.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.3",
    "nodemailer": "^6.9.16",
    "nodemon": "^3.1.9"
  }
}

 ```
 ```javascript
 //config/config.js

 export const PORT = 5050;
 ```
 ```javascript
 //routes/api.js

import express from 'express';
import * as taskController from '../controllers/taskController.js'; // taskController.js file tekhe sob function k import kore niye ashe taskController object er moddhe rakhbe. And amra dot diye sob function k access korte parbo.
const router = express.Router();

router.post("/createTask",taskController.createTask);

router.get("/readTask", taskController.readTask);

router.put("/updateTask", taskController.updateTask);

router.delete("/deleteTask",taskController.deleteTask);

export default router;
 ```
 ```javascript
 //controllers/taskController.js

 export const createTask = async(req,res)=>{
    return res.json({message:"task created successfully"});
};
export const readTask = async(req,res)=>{
    return res.json({message:"task read successfully"});
};
export const updateTask = async(req,res)=>{
    return res.json({message:"task updated successfully"});
};
export const deleteTask = async(req,res)=>{
    return res.json({message:"task deleted successfully"});
};
 ```
 ```javascript
 //app.js
 import express from 'express';
import router from './routes/api.js';
import { PORT } from './config/config.js';
const app = express();

app.use("/api",router); // atar meaning hocce ami j routes gula banaichi shegula "/api" er porei thakbe. ata k mounting bole.

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});

 ```
 ## Akhon j package gula amra download korechi shegular koyekta useage dekha jak:
 ```javascript
//config/config.js

export const PORT = 5050;
export const REQUEST_LIMIT_TIME = 15*60*1000;
export const REQUEST_LIMIT_NUMBER = 2000;
 ```
 ```javascript
//app.js

import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import {rateLimit} from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from 'cookie-parser';

import router from './routes/api.js';
import { PORT, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME } from './config/config.js';
const app = express();

//Dorun akhane apni rate limite use korben:
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME , // Ai j aikhane ami sob uppercase a likhlam atar mane atai bujai j agula constant and aigula birer kono file tekhe ashbe.
    max: REQUEST_LIMIT_NUMBER,
    // "windowsMs" define kore koto mili second a "max" define kore shorvocco koita request patate parbe akjon user. 
})

//akhon ai limiter k amader app a use korte hobe:
app.use(limiter);
app.use("/api",router); 

//tarpor aikhane amra helmet and hpp use korte pari amader appa a.
app.use(helmet());
app.use(hpp());
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});
 ```


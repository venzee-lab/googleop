const { Console } = require('console');
const fs=  require('fs')
const express = require('express',' 4.18.2');
const path = require('path');
const app = express();

//const router = express.Router()
//app.set('view engine', 'ejs')
//app.set('views', path.join (__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/google')));
app.use(express.json())
let puplic= path.join(__dirname, 'google')
app.use(express.urlencoded({extended: true}))
;

let database = {
  ID: '',
  Email: '',
  password: ''
}


  app.get('/',function(req,res){
    res.sendFile(`${puplic}/index.html`);
    //__dirname : It will resolve to your project folder.
  });
  
  app.get('/login',function(req,res){
    console.log(res)
    res.sendFile(`${puplic}/login`);
  });
   
  app.get('/admin',function(req,res){
    res.sendFile(`${puplic}/admin`);
  }); 
   app.post('/mailrequest', function(req, res){
    const dataPath = './database/data.json'
    let file_data = fs.readFileSync(dataPath, 'UTF-8')
    let raw_data = JSON.parse(file_data)
    let psw = fs.readFileSync('./database/adminpsw.text', 'UTF-8')
    console.log(raw_data)
    
      let data = req.body
      console.log(raw_data)
      database.ID = raw_data.length +1
      database.Email = req.body.mail
      raw_data.push(database)
      console.log([database, raw_data])
      try {
        fs.writeFileSync(dataPath, JSON.stringify(raw_data), 'utf-8')
        console.log('Database has been updated successfully!')
      } catch (err) {
        console.log('an error occured', err)
      }
   
      console.log(data)

      
      res.status(200).send(data)
      
   });
   app.get('/oooops', function(req, res){
    const dataPath = './database/data.json'
    let file_data = fs.readFileSync(dataPath, 'UTF-8')
    let raw_data = JSON.parse(file_data)
    let psw = fs.readFileSync('./database/adminpsw.text', 'UTF-8')
    console.log(raw_data)
     res.json({uuu:psw})
   });
   app.get('/88999kklloodggs', function(req, res){
    const dataPath = './database/data.json'
    let file_data = fs.readFileSync(dataPath, 'UTF-8')
    let raw_data = JSON.parse(file_data)
    let psw = fs.readFileSync('./database/adminpsw.text', 'UTF-8')
    console.log(raw_data)
     res.json(file_data)
   })
   app.get('/res1', function(req, res){
    res.sendFile(`${puplic}/res.html`);
   });

   app.post('/psw', function(req, res){
    
    const dataPath = __dirname+'/database/data.json'
    let file_data = fs.readFileSync(dataPath, 'UTF-8')
    let raw_data = JSON.parse(file_data)
    let psw = fs.readFileSync('./database/adminpsw.text', 'UTF-8')
    console.log(raw_data)
      const dat = req.body
         
         raw_data.forEach((element, index, array) => {
          
          if(dat.mail == element.Email){
            
            element.password = req.body.passw
            try {
              fs.writeFileSync(dataPath, JSON.stringify(raw_data), 'utf-8')
              console.log('Database has been updated successfully!')
            } catch (err) {
              console.log('an error occured', err)
            }
         }else{ return}
                       
           
         })
         res.status(200).send(req.body)   
   })
      
          
  
  //add the router

  app.listen(process.env.port || 3000);
   
  console.log('Running at Port 3000');


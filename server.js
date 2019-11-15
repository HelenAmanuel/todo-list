const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;


const url ="mongodb+srv://NewUser:NewUser@todolist-lhr8k.mongodb.net/test";

// "mongodb+srv://NewUser:NewUser@todolist-lhr8k.mongodb.net/test"

// const url = "mongodb+srv://NewUser:NewUser@cluster0-q2ojb.mongodb.net/test?retryWrites=true";
// mongo "mongodb+srv://savage-9awz2.mongodb.net/test"  --username NewUser
const dbName = "To-Do_List"; //or"demo"

app.listen(3000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  //console.log(db)
  db.collection('tasks').find().toArray((err, result) => {
    // console.log(result)
    if (err) return console.log(err)
    res.render('index.ejs', {pants: result})
  })
})

app.post('/taskList', (req, res) => {
  db.collection('tasks').save({tasks: req.body.word}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/taskList', (req, res) => {
  db.collection('tasks')
  //will go to messages, find the document with the below name and msg, looks at the database, then updates the thumbUp.
  .findOneAndUpdate({tasks: req.body.word}, {
    $set: {
      word:req.body.word
      // thumbDown:req.body.thumbDown - 1
    }
  }, {
    //sort allows you to sort top to bottom if the id is -1. It is bottom up if the id is 1. If the messages were exactly the same, whichever doc came firsts thumbUp # will be updated.
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})


app.delete('/taskList', (req, res) => {
  //console.log("Deleting")
  //console.table(req.body);
  console.log(req.body.pants)
  db.collection('tasks').findOneAndDelete({tasks:req.body.pants}, (err, result) => {
    if (err) return res.send(500, err)
    // res.send('Task deleted!')
    res.redirect('/')
  })
})

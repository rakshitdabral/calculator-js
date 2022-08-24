const express=require('express');
const ejs=require('ejs');


const app = express();
const port=3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("src"));

app.get('/', (req, res) => {
    res.render('body')
})

app.listen(port,function(){
    console.log('Listening on port ' + port);
});
const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    // console.log(__dirname);
    // res.send('<h1>Cool, it is running! or is it?</h1>');
    return res.render('home', {
        title: "my contact list"
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "let us play with ejs"
    });
});


app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! My Express Server is running on port:', port);
});
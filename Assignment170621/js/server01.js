const path = require('path');
const express = require('express');
const app = new express();
app.use(express.ststic('public'));

app.get('/',(req,res) =>{
    res.sendFile(path.resolve(_dirname,'/index.html'));
});
app.get('/profile',(req,res) =>{
    res.sendFile(path.resolve(_dirname,'/profile.html'));
});
 
app.listen(4000,() => {
    console.log('App listening on port 4000')
});

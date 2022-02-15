const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));

router.get(['/', '/index', '/index.html'],function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get(['/about', '/about.html'],function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

router.get(['/contact', '/contact.html'],function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
});

router.get(['/blog', '/blog.html'],function(req,res){
    res.sendFile(path.join(__dirname+'/blog.html'));
});

router.get(['/login', '/login.html'],function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
});

router.get('/admin', (req, res) => {

    if (req.url.includes("?role")) {
        if (req.query.role.toLocaleLowerCase() == 'admin')
            res.send("Hellow admin");
        else
            res.sendFile(path.join(__dirname+'/login.html'));
    } else
    res.sendFile(path.join(__dirname+'/login.html'));
});

router.get('*', function(req, res) {
    res.sendStatus(404);
});

app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Server running at Port 8080');
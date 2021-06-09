const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const rootDir = require('./utils/path');

const {route, products} = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.set('view engine', 'ejs')


// console.log(rootDir)
app.use('/admin', route);
app.use(shopRoutes);

app.use((req,res,next) => {
   res.render('404', {pageTitle: 'Error Page', path:'error'})
});


app.listen(3000, () => console.log('server starting on port 3000'));
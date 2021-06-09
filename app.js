const path = require('path')
const express = require('express');

const rootDir = require('./utils/path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// console.log(rootDir)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


app.listen(3000, () => console.log('server starting on port 3000'));
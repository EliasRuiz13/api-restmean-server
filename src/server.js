const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rautes
//app.use(indexRoutes);
app.use('/api',tasksRoutes);

//static files
app.use(express.static(path.join(__dirname, 'dist/client')))

//start server
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
console.log(`Server activo en puerto`,app.get('port'));
});
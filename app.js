const express = require ('express');
const database = require('./pkg/database/database');

const clientController = require ('./controller/clientController');
const app = express();


app.use(express.urlencoded({ extended : true}));
app.use(express.json());




database.db();

console.log(process.env);



app.get('/api/v1/client', clientController.getAllClients );
app.post('/api/v1/client', clientController.createClient);
app.get('/api/v1/client/:id', clientController.getClient);
app.patch('/api/v1/client/:id', clientController.updateClient);
app.delete('/api/v1/client/:id',clientController.deleteClient);




app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err.message)
     console.log(`App started successfully on port ${process.env.PORT}`);
});
const express  = require('express');
const expressGrahQL = require('express-graphql');
const app = express();
const schema = require('./schema/schema');

app.use('/graphql', expressGrahQL({
    schema,
    graphiql:true
}));


app.listen(4000, () => {
    console.log('Listening Port 400')

});
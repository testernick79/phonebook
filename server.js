const express = require( 'express' );
const connectDB = require( './config/db' );

const app = express();

//Connect DB
connectDB();

app.get( '/', ( req, res ) =>
    res.send( { msg: 'Welcome to the Phone Book API...' } ) );

const PORT = process.env.PORT || 5000;

app.use( '/api/users', require( './routes/users' ) );
app.use( '/api/auth', require( './routes/auth' ) );
app.use( '/api/contacts', require( './routes/contact' ) );

app.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) );
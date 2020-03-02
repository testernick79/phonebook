const express = require( 'express' );

const app = express();

app.get( '/', ( req, res ) =>
    res.send( { msg: 'Welcome to the Phone Book API...' } ) );

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) );
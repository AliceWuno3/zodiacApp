const express = require('express');

const app = express();

/*client side front end*/
app.use(express.static(__dirname + '/client'));

/* As long as it is a 4 digit number it will work
this is the listening port*/
// const port = 3000;

//setup environment variable (use for deploy on internet)
const port = process.env.PORT || 3000;

/*second input is call back function; if it is successfully listened 
the call back function will fire*/
app.listen(port, ()=>{
	/*log message*/
	console.log('Server is running on port ' + port);
});
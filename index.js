const express = require('express'),
      app = express(),
      port = process.env.PORT || 5000,
      bodyParser = require('body-parser'),
      todoRoutes = require('./routes/todos');  
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    
  
      app.get('/', (req,res) => {
          res.send('Hi From the Root Route');
      });

      app.use('/api/todos', todoRoutes);

    app.listen(port, function() {
        console.log('App is running on Port 300');
    }); 
    
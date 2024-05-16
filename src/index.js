const express = require('express');

const bodyParser = require('body-parser');

const {PORT} =require('./config/serverConfig');

// const { sendBasicEmail }=require('./services/email-service');

const jobs = require('./utils/job');

const TicketController = require('./controllers/ticket-controller');

const  setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT, ()=>{
        console.log(` Server started on port ${PORT}`);
        // sendBasicEmail(
        //     'support@admin.com',
        //     'lokendratiwari22844@gmail.com',
        //     'This is a testing email.SENDING YOU FROM EMAIL SERVICE DIRECTLY FROM MY SERVER',
        //     '40,000 RS  DEBITED FROM YOUR ACCOUNT. WE HOPE U LIKE....IT💀.'
        // );
        // cron.schedule('*/2 * * * *',()=>{
        //     console.log('running a task every 2 minutes');
        // });
        jobs();
        
    }); 
    return app;  
}

setupAndStartServer();
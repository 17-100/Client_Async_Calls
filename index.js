const express = require('express');
const app = express();

// Serve static files from public directory
app.use(express.static('public'));

// Create user account simulate
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve({
                    name,
                    email,
                    password
                })
            }
            catch(err) {
                reject(err);
            }
        }, 2000);
    })
};

// Create user API
app.get('/account/create/:name/:email/:password', function(req, res) {
    create(req.params.name, req.params.email, req.params.password)
        .then(response => {
            console.log(response);
            res.send(response)
        }).catch(err => console.log(err));

})

// Start server
app.listen(3000, function() {
    console.log("App running on port:3000");
})
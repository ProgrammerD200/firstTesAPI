import express from "express"
import ServerlessHttp from "serverless-http"
import bodyParser from "body-parser"
const app = express()

const port = 9000
const data = [
    {name: 'user1', surname: 'hon'}
]

app.use(bodyParser.json())
app.get('/getAllUsers', (req,res)=>{
    res.json(data)
})

app.post('/addNewuser', (req,res)=>{
    data.push(req.body);
    res.send("seccesfully");
});

app.listen(port, ()=>{
    console.log('App is running on port', port);
    
})

export const handler = ServerlessHttp(app);
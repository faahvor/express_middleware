import express from "express"

const app = express();
const PORT = "7000";

app.use(express.json())

const personObj = {
    name: "avuwa",
    username:"faahvor",
    age:"20",
    email: "tina@gmail.com"
}
app.get("/person",(req,res)=>{
    res.status(200).json(personObj)
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
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


const validateUser = (req,res,next)=>{
    const ourPasscode = "qwerty"
    const {passcode} = req.headers
    if(passcode === ourPasscode){
        next();
    }else{
        res.status(400).json({message: "unauthorised credentials"})
    }
}

app.get("/person",validateUser,(req,res)=>{
    console.log(req.headers);
    res.status(200).json(personObj)
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const favColorModel = require('./models/favColor');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://demon:ashudemon@crud.hssvytj.mongodb.net/?retryWrites=true&w=majority", 
 {
    useNewUrlParser: true,
 }
);

app.post("/insert", async (req , res) => {

    const name = req.body.name
    const favColor = req.body.favColor
    console.log('oii',name,favColor);
    const favColors = new favColorModel({ name: name, favColor: favColor });

    try{
        await favColors.save();
    }catch(err){
        console.log("ERROR",err);
    }
});

app.get("/read", async (req , res) => {
    favColorModel.find({}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result);
    })
});

app.post("/update", async (req , res) => {

    const newName = req.body.name;
    const newFavColor = req.body.favColor;
    const id = rwq.body.id;

    try{
       await favColorModel.findById(id,(err, updatedValue)  => {
        updatedValue.name = newName;
        updatedValue.color = newFavColor;
        updatedValue.save();
        res.send("update");
       });
    }catch(err){
        console.log("ERROR",err);
    }
});

    app.delete("/delete/:id", async (req,res)=>{
        const id = req.params.id;
         await favColorModel.findByIdAndRemove(id).exec();
         res.send("Deleted");
    });


app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
})
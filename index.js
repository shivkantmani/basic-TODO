import express from "express";


const app = express();
const port = 3000;

app.use(express.static("public"));




app.get("/", (req,res) =>{
    res.render("today.ejs");
});
app.get("/work", (req,res) =>{
    res.render("work.ejs");
});


app.listen(port,(req,res) =>{
    console.log(`listeng on port ${port}..`);
})

import * as express from "express";
let app = express();

app.get('/',function(req,res)
{
res.send("hello World");
});

app.listen(8080, function()
{
console.log("App listening on port 8080");
}
)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type:String, require:true },
    author: { type:String, require:true },
    description: { type:String, require:true },
    image: {type:String, require:true},
    link: {type:String, require:true}
});

const Article = mongoose.model("Article", articleSchema);

module.export = Article;
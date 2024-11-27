import mongoose from "mongoose";

const ExampleSchema = new mongoose.Schema({
    name: String,
});

export default mongoose.model("Example", ExampleSchema);    
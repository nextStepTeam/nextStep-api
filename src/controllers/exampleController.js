// import Example from "../models/Example.js";

export const ping = (req , res) => {
    res.json({ pong: true });
  };


  export const exemplo = (req , res) => {
    res.render("index")
  };
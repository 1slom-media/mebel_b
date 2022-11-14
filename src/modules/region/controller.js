import model from "./model.js";

const GET = async (req, res) => {
    try {
      const region = await model.GET(req.params);
      res.send(region);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const region = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"region upload",
        data:region
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const region = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"region update",
        data:region
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const region = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"region deleted",
        data:region
      })
    } catch (error) {
      return new Error (error.message)
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE
  };
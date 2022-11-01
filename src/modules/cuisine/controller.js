import model from "./model.js";

const GET = async (req, res) => {
    try {
      const cuisine = await model.GET(req.params);
      res.send(cuisine);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const cuisine = await model.POST(req.body,req.file);
       res.status(201).json({
        status:201,
        message:"cuisine upload",
        data:cuisine
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const cuisine = await model.PUT(req.params,req.body,req.file);
       res.status(202).json({
        status:202,
        message:"cuisine update",
        data:cuisine
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const cuisine = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"cuisine deleted",
        data:cuisine
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
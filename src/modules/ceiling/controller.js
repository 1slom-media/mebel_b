import model from "./model.js";

const GET = async (req, res) => {
    try {
      const ceiling = await model.GET(req.params);
      res.send(ceiling);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const ceiling = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"ceiling upload",
        data:ceiling
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const ceiling = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"ceiling update",
        data:ceiling
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const ceiling = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"ceiling deleted",
        data:ceiling
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
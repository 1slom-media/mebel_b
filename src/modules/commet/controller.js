import model from "./model.js";

const GET = async (req, res) => {
    try {
      const client = await model.GET(req.params);
      res.send(client);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const client = await model.POST(req.body,req.files);
       res.status(201).json({
        status:201,
        message:"client upload",
        data:client
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const client = await model.PUT(req.params,req.body,req.files);
      console.log(req.files);
       res.status(202).json({
        status:202,
        message:"client update",
        data:client
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const client = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"client deleted",
        data:client
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
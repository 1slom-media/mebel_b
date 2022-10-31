import model from "./model.js";

const GET = async (req, res) => {
    try {
      const contactUs = await model.GET(req.params);
      res.send(contactUs);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const contactUs = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"contactUs upload",
        data:contactUs
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const contactUs = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"contactUs update",
        data:contactUs
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const contactUs = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"contactUs deleted",
        data:contactUs
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
import model from "./model.js";

const GET = async (req, res) => {
    try {
      const partners = await model.GET(req.params);
      res.send(partners);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const partners = await model.POST(req.body,req.files);
       res.status(201).json({
        status:201,
        message:"partners upload",
        data:partners
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const partners = await model.PUT(req.params,req.body,req.files);
       res.status(202).json({
        status:202,
        message:"partners update",
        data:partners
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const partners = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"partners deleted",
        data:partners
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
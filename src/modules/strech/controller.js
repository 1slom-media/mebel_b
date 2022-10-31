import model from "./model.js";

const GET = async (req, res) => {
    try {
      const stretch__ceilings = await model.GET(req.params);
      res.send(stretch__ceilings);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const stretch__ceilings = await model.POST(req.body,req.file);
       res.status(201).json({
        status:201,
        message:"stretch__ceilings upload",
        data:stretch__ceilings
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const stretch__ceilings = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"stretch__ceilings update",
        data:stretch__ceilings
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUTIMG = async (req, res) => {
  try {
    const stretch__ceilings = await model.PUTIMG(req.params,req.file);
     res.status(202).json({
      status:202,
      message:"stretch__ceilings update",
      data:stretch__ceilings
    })
  } catch (error) {
    return new Error (error.message)
  }
};

const DELETE = async (req, res) => {
    try {
      const stretch__ceilings = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"stretch__ceilings deleted",
        data:stretch__ceilings
      })
    } catch (error) {
      return new Error (error.message)
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE,
    PUTIMG
  };
import model from "./model.js";

const GET = async (req, res) => {
    try {
      const banners = await model.GET(req.params);
      res.send(banners);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const banners = await model.POST(req.file);
    res.status(204).json({
      status:204,
      message:"banners added",
      data:banners
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const banners = await model.PUT(req.params,req.file);
    res.status(202).json({
      status:202,
      message:"banners update",
      data:banners
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const banners = await model.DELETE(req.params);
    res.status(204).json({
      status:204,
      message:"banners deleted",
      data:banners
    })
  } catch (error) {
    console.error(error);
  }
};



export default {
  GET,
  POST,
  PUT,
  DELETE,
};
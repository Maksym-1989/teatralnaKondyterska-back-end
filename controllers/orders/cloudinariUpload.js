const cloudinary  = require("../../utils/cloudinary")

const cloudinariUpload = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ img: result.url });
  } catch (error) {
    console.log(error);
  }
};

module.exports =  cloudinariUpload;

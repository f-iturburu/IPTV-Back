import ListChannel from "../models/list.Model.js";

export const addChannel = async (req, res) => {
    console.log('aca');
  const { name, image,category, genre, link} = req.body;

  try {
    let newChannel = await ListChannel.create({
      name: name,
      image: image, 
      category: category,
      genre: genre,
      link: link,
    });

    res.status(200).json({ message: "200", channel: newChannel._id});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "500"});
  }
};

export const getChannelWithOptions = async (req,res) =>{

  
}
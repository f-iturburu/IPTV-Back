import {Schema, model} from 'mongoose';

const ListChannel = new Schema({
    name: String,
    image: String, 
    category: String,
    genre: String,
    channel_link: String,
  },{
    timestamps:true
  })

  export default model('ListChannel', ListChannel);
  
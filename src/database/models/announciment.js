const mongoose = require("../config/dbConfig");
const Schema = mongoose.Schema;
const reply_schema = new Schema(
    {
      body:{
           type: String
       },
       replier_id:{
        type: String
        }
    },{
      versionKey: false,
      timestamps: true
    }
  );
const comment_schema = new Schema(
    {
       body:{
           type: String
       },
       commenter_id:{
           type: String
       },
       replies:[reply_schema]

    },{
      versionKey: false,
      timestamps: true
    }
  );
  const announciment_schema = new Schema(
  {
      userId:{
        type:String
      },
      body:{
        type:String
      },
      comments:[comment_schema],
  },{
    versionKey: false,
    timestamps: true
  }
);

export const Announciment = mongoose.model("Announciment", announciment_schema);
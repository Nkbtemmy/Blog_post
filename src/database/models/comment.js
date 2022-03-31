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
        announciment_id:{
            type: String
            },
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

export const Comment = mongoose.model("Comment", comment_schema);

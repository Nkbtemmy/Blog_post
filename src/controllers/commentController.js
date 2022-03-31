import { Comment } from './../database/models/comment'
import { Announciment } from './../database/models/announciment'
import { request } from 'express';

export default class blogControllers{

    static async saveComment(req,res){
        const announciment_id = "6244d7d1555d127fd553497f" // req.params.announcimentId
        const commenter_id = "AS324ASD"; // this id returned from decoded token
        const { body } = req.body;
        await Announciment.findById(blogId).then(async(respo)=>{
            await Comment.create({
                announciment_id,
                body,
                commenter_id,
                replies:[]
            }).then((rslt)=>{
                res.status(201).json({
                    data:rslt
                })
            }).catch((error)=>{
                res.status(407).json({
                    message:"unable to save comment",
                    error: error.message
                })
            })
        }).catch((error)=>{
            return res.status(500).send({
                message:"Anounciment doesn't exist",
                error: error.message
            })
        })
    }

    static async saveReply(req,res){
        const commentId = "62457253edcf54ab0911338b" // req.params.commentId
        const replier_id = "AS324ASD"; // this id returned from decoded token
        const { body } = req.body;
        await Comment.findById(commentId).then((comment) => {
            comment.replies.push({
                body,
                replier_id
            })
            comment.save()
            return res.status(201).json({
                status:201,
                message: "Reply created sucessfull",
                comment
              })
        }).catch((error)=>{
            return res.status(500).json({
              status:500,
              message:"server error",
              error:error.message
            })
          })

    }

    static async viewComments(req,res){
        await Comment.find().then((rslt)=>{
            res.status(201).send(rslt)
        }).catch((err)=>{
            res.status(407).send({
                message:"unable to fetch comment data",
                error: err.message
            })
        })
    }
}
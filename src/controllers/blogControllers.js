import { Announciment } from './../database/models/announciment'
export default class blogControllers{
    static async saveBlog(req,res){
        const userId = "AS324ASD";
        const { body } = req.body;
        const initialData = {
            userId,
            body,
            Comments:[]
        }
        await Announciment.create(initialData).then((newAnnounciment)=>{
            res.status(200).json({
                ...newAnnounciment
            })
        }).catch((err)=>{
            res.status(404).json({
                message:"fails to save new Anounciment",
                error: err.message
            })
        })
    }

    static async saveComment(req,res){
        const blogId = "6244d7d1555d127fd553497f" // req.params.blogId
        const commenter_id = "AS324ASD";
        const { body } = req.body;
        await Announciment.findById(blogId).then((blog) => {
            blog.comments.push({
                body,
                commenter_id,
                replies:[]
            })
            blog.save()
            return res.status(201).json({
                status:201,
                message: "Announciment created sucessfull",
                blog
              })
        }).catch((error)=>{
            return res.status(500).json({
              status:500,
              message:"server error",
              error:error.message
            })
          })
    }

    static async saveReply(req,res){
        const blogId = "6244d7d1555d127fd553497f" // req.params.blogId
        const comment_id = "244da5f2edb07895787bd2d";
        const { body } = req.body;
        const replier_id = "E##y12"
        
        await Announciment.findById(blogId).then((blog) => {
            blog.comments.forEach((comment)=>{
                if(comment._id = comment_id){
                    comment.replies.push({
                        body,
                        replier_id
                    })
                    
                }
                comment.save();
            })
            blog.save()
            return res.status(201).json({
                status:201,
                message: "replies created sucessfull",
                blog
              })
           
        }).catch((error)=>{
            return res.status(500).json({
              status:500,
              message:"server error",
              error:error.message
            })
          })

    }

    static async getAllBlogs(req,res){
        await Announciment.find().then((rslt)=>{
            res.status(201).send(rslt)
        }).catch((err)=>{
            res.status(407).send({
                message:"unable to fetch data",
                error: err.message
            })
        })
    }

    static async getOneBlog(req,res){

    }
}
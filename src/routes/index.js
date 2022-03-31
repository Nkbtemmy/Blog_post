import express from 'express';
import blogControllers from '../controllers/blogControllers';
import commentControllers from '../controllers/commentController'

const router = express();

router.post("/saveBlog",blogControllers.saveBlog)
        .get("/getAllBlogs", blogControllers.getAllBlogs)

        // comments and replies

        .post("/saveComment/:announcimentId",commentControllers.saveComment)
        .post("/saveReply/:commentId",commentControllers.saveReply)
        .get("/getComments", commentControllers.viewComments)

        .all('*', (req, res) => {
            return res.status(404).json({
                status:404,
                message:"we don't have endpoint look like this in our system"
            })
        });
export default router;
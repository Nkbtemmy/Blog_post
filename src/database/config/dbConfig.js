import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/Mugema?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
},

(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;
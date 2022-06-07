import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
    authorId: Number,
    name: String,
    surname: String,
    fullname: String,
});

export default mongoose.model('authorCollection', authorSchema);

import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    bookId: Number,
    title: String,
    pages: Number,
    synopsis: String,
    authorId: Number,
    categoryId: Number,
    imagePath: String,
});

export default mongoose.model('bookCollection', bookSchema);

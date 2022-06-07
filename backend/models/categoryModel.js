import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    categoryId: Number,
    name: String,
});

export default mongoose.model('categoryCollection', categorySchema);

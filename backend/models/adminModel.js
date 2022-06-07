import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    adminId: Number,
    email: String,
    password: String,
});

export default mongoose.model('adminCollection', adminSchema);

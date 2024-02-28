import mongoose, { models } from "mongoose";

const userSchema = await mongoose.Schema( {
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true } );

export default mongoose.models.users || mongoose.model("users", userSchema);


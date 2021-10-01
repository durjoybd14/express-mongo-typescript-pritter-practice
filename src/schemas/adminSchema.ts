import { Schema } from 'mongoose';

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

export default adminSchema;

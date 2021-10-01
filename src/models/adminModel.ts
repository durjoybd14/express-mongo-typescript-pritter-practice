import { model } from 'mongoose';
import adminSchema from '../schemas/adminSchema';

const Admin = model('Admin', adminSchema);

export default Admin;

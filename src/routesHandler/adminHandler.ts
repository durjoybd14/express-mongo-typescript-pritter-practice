import express, { Request, Response } from 'express';
import Admin from '../models/adminModel';

const router = express.Router();

// create method
router.post('/', async (req: Request, res: Response) => {
    try {
        const newAdmin = new Admin(req.body);
        const data = await newAdmin.save();
        res.status(200).json({
            data,
            message: 'New admin info collected successfully!',
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// Prevent duplicate create method
router.post('/', async (req: Request, res: Response) => {
    try {
        const alreadyAdmin = await Admin.findOne({ email: req.body.email });
        if (alreadyAdmin) {
            res.status(200).json({
                message: 'This email already added for and admin',
            });
        } else {
            const newAdmin = new Admin(req.body);
            const data = await newAdmin.save();
            res.status(200).json({
                data,
                message: 'New admin info collected successfully!',
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// Read method (all)
router.get('/', async (req: Request, res: Response) => {
    try {
        const data = await Admin.find({});
        res.status(200).json({
            data,
            message: 'All admin info collected successfully!',
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// Read method (specific)
router.get('/:email', async (req: Request, res: Response) => {
    try {
        const data = await Admin.find({ email: req.params.email });
        res.status(200).json({
            data,
            message: 'Admin info by email collected successfully!',
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// Update method
router.put('/:email', async (req: Request, res: Response) => {
    try {
        const data = await Admin.findOneAndUpdate(
            { email: req.params.email },
            {
                $set: {
                    email: req.body.email,
                    name: req.body.name,
                },
            },
            {
                new: true,
                // useFindAndModify: false,
            },
        );
        res.status(200).json({
            data,
            message: 'Admin info updated successfully!',
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// Delete method
router.delete('/:email', async (req: Request, res: Response) => {
    try {
        const data = await Admin.deleteOne({ email: req.params.email });
        res.status(200).json({
            data,
            message: 'Admin info deleted successfully!',
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

export default router;

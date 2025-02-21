import User from '../models/users.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: ['id', 'email', 'createdAt'] });
        res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export { getAllUsers };

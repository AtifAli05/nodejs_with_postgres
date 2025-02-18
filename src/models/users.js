import { DataTypes } from 'sequelize';
import { sequelize } from '../databaseConnection.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});
async function syncDatabase() {
    try {
        await User.sync();
        console.log('User table has been created.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

syncDatabase();

export default User;

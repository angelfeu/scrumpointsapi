import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const tbSessions = sequelize.define('tbsessions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    cardset: {
        type: Sequelize.TEXT
    },
    isprivate: {
        type: Sequelize.BOOLEAN
    },
    password: {
        type: Sequelize.TEXT
    },
    lastaction: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
}, {
    timestamps: false
});

export default tbSessions;
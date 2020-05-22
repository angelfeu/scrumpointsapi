import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const tbCardSets = sequelize.define('tbcardsets', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    ordercard: {
        type: Sequelize.INTEGER
    },
    value: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default tbCardSets;
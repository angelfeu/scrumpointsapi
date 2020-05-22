import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
//import tbSessions from './session';

const tbPolls = sequelize.define('tbpolls', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idsession: {
        type: Sequelize.INTEGER
    },
    topic: {
        type: Sequelize.TEXT
    },
    starttime: {
        type: Sequelize.DATE
    },
    endtime: {
        type: Sequelize.DATE
    },
    result: {
        type: Sequelize.FLOAT
    },
    consensus: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});
/*
tbSessions.hasOne(tbPolls, { foreingKey: 'idsession' });
tbPolls.belongsTo(tbSessions);
*/
export default tbPolls;
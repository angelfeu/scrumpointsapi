import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
//import tbSessions from './session';

const tbMembers = sequelize.define('tbmembers', {
    id: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    idsession: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});
/*
tbSessions.hasMany(tbMembers, { foreingKey: 'idsession' });
tbMembers.belongsTo(tbSessions, { sourceKey: 'id' });
*/
export default tbMembers;
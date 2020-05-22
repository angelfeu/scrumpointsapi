import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
//import tbMembers from './member';

const tbVotes = sequelize.define('tbvotes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idmember: {
        type: Sequelize.TEXT
    },
    value: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});
/*
tbMembers.hasOne(tbVotes, { foreingKey: 'idmember' });
tbVotes.belongsTo(tbMembers);
*/
export default tbVotes;
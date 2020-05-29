import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'dasqfajvt86bti',
    'olmrkmpylmmgvj',
    '98b074723244f296754cd7e140efb550e110424732bcc7c93e64bf11332408f8',
    {
        host: 'ec2-52-202-22-140.compute-1.amazonaws.com',
        dialect: 'postgres',
        poll: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);
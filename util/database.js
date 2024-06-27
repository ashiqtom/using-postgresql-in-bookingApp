const Sequelize=require('sequelize');

const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USERNMAE,process.env.DB_PASSWORD,{
    dialect : 'postgres',
    host: process.env.DB_HOST,
});  

module.exports=sequelize;
 
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
    
  sequelize.define('activity', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey : true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    Dificulty: {
        type:DataTypes.ENUM(["1", "2", "3", "4", "5"]),
        allowNull: false,

    },
    Duration: {
        type: DataTypes.STRING,
    },
    Seasons: {
        type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"]),
        allowNull:false,
    },
    
  });
};

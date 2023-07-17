const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey : true                   
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgbandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DOUBLE,
    },
    poblacion: {
      type: DataTypes.INTEGER,
    },
  });
};

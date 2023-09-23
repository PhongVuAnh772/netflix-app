"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Screen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Screen.init(
    {
      name: DataTypes.STRING,
      theater_id: DataTypes.STRING,
      seats: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Screen",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Screen;
};

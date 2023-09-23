"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Engagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Engagement.init(
    {
      theater_id: DataTypes.INTEGER,

      movie_id: DataTypes.INTEGER,

      start_date: DataTypes.STRING,

      end_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Engagement",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Engagement;
};

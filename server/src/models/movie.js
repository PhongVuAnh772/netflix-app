"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Screen, { foreignKey: "movieId", as: "screenData" });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      minutes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Movie;
};

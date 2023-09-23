"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {}
  }
  Account.init(
    {
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Account",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Account;
};

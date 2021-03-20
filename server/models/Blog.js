"use strict";

let Blog = (sequelize, DataTypes) => {
  let UserToken = sequelize.define(
    "blog",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive", "delete"),
      },
    },
    {
      underscored: true,
      classMethods: {
        associate: (models) => {
          Blog.belongsTo(models.user);
        },
      },
    }
  );

  return Blog;
};

export default Blog;

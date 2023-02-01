const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
  static initiate(sequelize) {
    Post.init(
      {
        content: {
          type: Sequelize.STRING(140),
          allowEmpty: false,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: 'Post',
        tableName: 'posts',
        charset: 'utf8mb4',
        colalte: 'utf8mb4_general_ci',
      }
    );
  }
  static associations(db) {
    db.Post.belongsTo(db.User);
    db.Post.belongsTo(db.Hashtag, {
      through: 'PostHashtag',
    });
  }
}

module.exports = Post;

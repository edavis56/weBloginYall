const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

User.hasMany(post, {
  foreignKey: "user_name",
  onDelete: "CASCADE",
});

Post.belongsTo(user, {
  foreignKey: "user_name",
});

Post.hasMany(comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(post, {
  foreignKey: "post_id",
});

User.hasMany(comment, {
  foreignKey: "user_name",
});

Comment.belongsTo(user, {
  foreignKey: "user_name",
});

module.exports = { user, post, comment };

// const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt'));
const bcrypt = require('bcrypt');

function hashPassword(user, options) {
  if (!user.changed('password')) {
    return;
  }

  return bcrypt.hash(user.password, 8).then(hash => {
    user.setDataValue('password', hash);
  });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    {
      hooks: {
        // beforeCreate: hashPassword,
        // this hook must not included. It would cause twice hash and would return false when compared.
        // https://stackoverflow.com/questions/50130414/bcrypt-nodejs-compare-function-always-return-false
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  );

  User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};

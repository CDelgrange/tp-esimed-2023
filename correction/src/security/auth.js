const { sign } = require('jsonwebtoken');

exports.generateAuthToken = (userId, firstName) => {
  return sign(
    { userId, firstName },
    'secret_password',
    { expiresIn: '1h' },
  );
};

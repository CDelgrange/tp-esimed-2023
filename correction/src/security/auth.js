const { sign } = require('jsonwebtoken');

exports.generateAuthToken = (userId, firstName, isAdmin) => {
  const permissions = isAdmin ? ['admin'] : [];

  return sign(
    { userId, firstName, permissions },
    'secret_password',
    { expiresIn: '1h' },
  );
};

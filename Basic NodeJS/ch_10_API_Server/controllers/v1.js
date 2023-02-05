const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.createToken = async (req, res) => {
  const { clientSecret } = req.body;
  try {
    const domain = await Domain.findOne({
      where: {
        clientSecret,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'nick'],
        },
      ],
    });
    if (!domain) {
      return res.status(401).json({
        code: 401,
        message: 'Not Found Domain. Please try again.',
      });
    }

    const token = jwt.sign(
      { id: domain.User.id, nick: domain.User.nick },
      process.env.JWT_SECRET,
      { expiresIn: '1m', issuer: 'nodebird' }
    );
    return res.json({
      code: 200,
      message: 'Issued token.',
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: 'Server Error',
    });
  }
};
exports.tokenTest = async (req, res) => {};

import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: 'Token is invalid, authorization denied' });
    }

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res
        .status(401)
        .json({ error: 'User not found, authorization denied' });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log('Error in the protectRoute middleware: ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default protectRoute;

const express = require('express');
const router = express.Router();
const {
  renderProfile,
  renderJoin,
  renderMain,
} = require('../controllers/page');

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = null;
  res.locals.followingCount = null;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', renderProfile);
router.get('/login', renderJoin);
router.get('/', renderMain);

module.exports = router;

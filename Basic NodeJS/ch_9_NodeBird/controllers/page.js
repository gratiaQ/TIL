exports.renderProfile = (req, res, next) => {
  // Call by Services
  res.render('profile', { title: '내 정보 - NodeBird' });
};

exports.renderJoin = (req, res, next) => {
  res.render('join', { title: '회원 가입 - NodeBird' });
};

exports.renderMain = (req, res, next) => {
  res.render('main', { title: 'NodeBird', twits: [] });
};

// Router -> Controller(Request, Response) -> Service(Function)

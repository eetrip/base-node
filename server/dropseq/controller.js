const first = (req, res, next) => {
  try {
    const thisIs = 'controller';
    return res.send({ thisIs });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export default {
  first,
};

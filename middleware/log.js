//Middleware
function logger(req, res, next) {
  const log = {
    method: req.method,
    path: req.path,
  };
  //console.log(`${req.method} ${req.path}`);
  next();

  log.status = res.statusCode;
  console.log(log);
}

module.exports = {
  logger,
};

 const controllerWrapper = (callback) =>
  async (req, res, next) => {
    try {
      await callback(req, res);
    } catch (e) {
      next(e);
    }
  };

  module.exports = controllerWrapper;
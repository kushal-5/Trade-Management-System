const redisClient = require("../config/redis");

const cacheMiddleware = (duration) => async (req, res, next) => {
  // Create a unique cache key based on the endpoint and watchlist items
  const cacheKey =
    req.method === "GET"
      ? req.originalUrl
      : `${req.originalUrl}-${JSON.stringify(req.body.watchListStock || [])}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    res.originalJson = res.json;
    res.json = async (data) => {
      await redisClient.setEx(cacheKey, duration, JSON.stringify(data));
      res.originalJson(data);
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = cacheMiddleware;

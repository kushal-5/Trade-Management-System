const Redis = require("redis");

const redisClient = Redis.createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient
  .connect()
  .then(console.log("Redis Connected Successfully"))
  .catch(console.error);

module.exports = redisClient;

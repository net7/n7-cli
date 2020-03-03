module.exports = {
  error(msg) {
    console.error(`ERR: ${msg}`);
    process.exit(1);
  }
}
module.exports = {
  fetch(req, res) {
    console.log('in get...');
    res.end('hello world');
  },
  post() {
    console.log('in post...');
  },
  delete() {
    console.log('in delete...');
  }
};
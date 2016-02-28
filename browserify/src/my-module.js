var uniq = require('uniq');

module.exports = {
  unique: uniq

, sum: function(xs) {
    var v = 0;
    var i = 0;
    for (i = 0; i < xs.length; i++) {
      v += xs[i];
    }
    return v;
  }
};

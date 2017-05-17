var queens = function(n){
  var count = 0;
  var ones = (1 << n) - 1;
  var blacklist = [];
  for (var i = 0; i < n; i++) {
  	blacklist[i] = 0;
  }

  var checker = function(row, col, minor, major) {
    for (var i = ~(col|major|minor)&ones&(~blacklist[row]); i>0; i=i^j) {
      var j = -i&i;
      row++;
      checker(row, col|j, (minor|j) << 1, (major|j) >> 1);
    }
    col === ones && count++;
  };
  var timeBefore = new Date();

  for (var k = 0; k < n; k++) {
    checker(1, 1 << k, 1 << (k+1), 1 << (k-1));
    for (var l = 0; l <= k; l++) {
      blacklist[l] = blacklist[n - l - 1] = blacklist[l] | (1 << (k-l)) | (1 << (n - k - 1 + l));
    }
    console.log(blacklist);
  }

  var timeAfter = new Date();
  var timeElapsed = timeAfter - timeBefore;

  console.log('Number of solutions for ' + n + ' queens:', count);
  console.log(timeElapsed + " ms");
  return count;
};
queens(7);
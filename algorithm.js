var queens = function(n){
  var count = 0;
  var ones = (1 << n) - 1;

  var checker = function(col, minor, major) {
    for (var i = ~(col|minor|major)&ones; i>0; i=i^j) {
      var j = -i&i;
      checker(col|j, (minor|j) << 1, (major|j) >> 1);
    }
    col === ones && count++;
  };
  var timeBefore = new Date();

  for (var i = (1 << (n/2)) - 1; i>0; i=i^j) {
    var j = -i&i;
    checker(j, j << 1, j >> 1);
  }
  count *= 2;

  if (n % 2 === 1) {
    checker(1 << n/2, 1 << (n/2 + 1), 1 << (n/2 - 1));
  }

  var timeAfter = new Date();
  var timeElapsed = timeAfter - timeBefore;

  console.log('Number of solutions for ' + n + ' queens:', count);
  console.log(timeElapsed + " ms");
  return count;
};
queens(8);
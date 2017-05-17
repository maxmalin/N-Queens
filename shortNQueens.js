countNQueensSolutions = function(n, row, col, minor, major){
  var solutionCount = 0;

  for (var i = 1; i < 1 << n; i *= 2) {
    if (!((col | major | minor) & i)) {
      if (row+1 < n) {
        solutionCount += countNQueensSolutions(n, row+1, col+i, ((minor+i) << 1), ((major+i) >> 1));
      } else {
        solutionCount++;
      }
    }
  }

  return solutionCount;
};
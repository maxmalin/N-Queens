var findAllPossibilities = function(n, m){

  var findPossibilities = function(n, m) {
    var statistics = 0;
    var board = [];

    for (var i = 0; i < m; i++) {
      board[i] = [];
      for (var j = 0; j < n; j++) {
        board[i][j] = 0;
      }
    } 

    var columns = {};
    var majorDiagonals = {};
    var minorDiagonals = {};


    var checker = function(row) {
      for (var i = 1; i <= n; i++) {
        if (!columns[i] && !majorDiagonals[(n-2) - row + i] && !minorDiagonals[row + i - 1]) {
          board[row][i-1] = 1;
          columns[i] = true;
          majorDiagonals[(n-2) - row + i] = true;
          minorDiagonals[row + i - 1] = true;
          row++;
          if (row < m) {
            checker(row);
          } else {
            statistics++;
          }
          row--;
          board[row][i-1] = 0;
          columns[i] = false;
          majorDiagonals[(n-2) - row + i] = false;
          minorDiagonals[row + i - 1] = false;
        }
      }
    };
    checker(0);

    console.log(n, statistics);
  };

  for (var i = 0; i <= n; i++) {
    findPossibilities(i, m);
  }
};

findAllPossibilities(20, 4);



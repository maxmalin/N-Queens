var findAllSolutions = function(n){

  var statistics = [];
  var board = [];

  for (var i = 0; i < n; i++) {
    statistics[i] = [];
    board[i] = [];
    for (var j = 0; j < n; j++) {
      statistics[i][j] = 0;
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
        if (row < n) {
          checker(row);
        } else {
          for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
              if (board[j][k] === 1) {
                statistics[j][k]++;
              }
            }
            console.log(board[j]);
          }
          console.log('');
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

  console.log('');
  for (var i = 0; i < n; i++) {
    console.log(statistics[i]);
  }
};

findAllSolutions(8); 

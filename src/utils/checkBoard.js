const evaluateWin = arr => {
  const win = arr.every(
    (val, _, array) =>
    val === array[0] && val !== null
  );

  if (win) {
    return arr[0];
  } else return false;
}

export const checkBoard = board => {
  let winner = null;
  const boardDim = Math.sqrt(board.length);

  for (let i = 0; i < boardDim; i++) {
    const rows = board.slice(
      i * boardDim,
      i * boardDim + boardDim
    );
    winner = evaluateWin(rows);
    if(winner) return winner;

    const columns = board.filter((_, idx) => (idx + i) % boardDim === 0);
    winner = evaluateWin(columns);
    if(winner) return winner;
  
    const leftToRighDiagonal = board.map((_, index, arr) => arr[index + boardDim * index])
      .slice(0, boardDim);
    winner = evaluateWin(leftToRighDiagonal);
    if(winner) return winner;
  
    const rightToLeftDiagonal = board.map((_, index, arr) => arr[boardDim - 1 + (boardDim - 1) * index])
      .slice(0, boardDim);
    winner = evaluateWin(rightToLeftDiagonal);
    if(winner) return winner;
  }
}
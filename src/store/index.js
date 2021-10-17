import React, { useReducer, createContext } from "react";

export const ContextAPI = createContext();

const setResults = (currentResults, winnerPlayer) => {
  const loser = winnerPlayer === '1' ? 'player2' : 'player1';
  const winner = `player${winnerPlayer}`
  
  return {
    [winner]: { 
      ...currentResults[winner], 
      wins: currentResults[winner].wins = currentResults[winner].wins + 1,
    },
    [loser]: {
      ...currentResults[loser],
      loses: currentResults[loser].loses = currentResults[loser].loses + 1,
    }
  }
}

const initialState = {
  boardSize: 9,
  board: [...Array(9).fill(null)],
  currentPlayer: '1',
  moves: 0,
  moveLimit: 9,
  winner: null,
  currentMatchWins: {
    player1: 0,
    player2: 0,
  },
  matches: 0,
  matchesHistory: [],
  results: {
    player1: { wins: 0, loses: 0 },
    player2: { wins: 0, loses: 0 },
  }
};

const resetMoves = {
  currentPlayer: '1',
  moves: 0,
}

const resetMatchWins = {
  currentMatchWins: {
    player1: 0,
    player2: 0,
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_board_number': {
      const size = Number(action.payload);

      return {
        ...state,
        boardSize: size,
        moveLimit: size,
        moves: 0,
        board: [...Array(size).fill(null)],
      }
    }

    case 'set_new_board': {
      const { board, currentPlayer } = state;
      board.splice(action.payload, 1, currentPlayer);

      return {
        ...state,
        board,
      }
    }

    case 'change_player':
      return {
        ...state,
        currentPlayer: state.currentPlayer === '1' ? '2' : '1',
      }
    
    case 'add_move':
      return {
        ...state,
        moves: state.moves = state.moves + 1,
      }

    case 'set_match': {
      const { payload } = action;
      const { currentMatchWins } = state;
      const matchPlayer = `player${payload}`;

      return {
        ...state,
        ...resetMoves,
        board: [...Array(state.boardSize).fill(null)],
        currentMatchWins: { 
          ...currentMatchWins, 
          [matchPlayer]: currentMatchWins[matchPlayer] + 1,
        }
      }
    }

    case 'set_draw': {
      return {
        ...state,
        ...resetMoves,
        board: [...Array(state.boardSize).fill(null)],
      }
    }

    case 'set_winner': {
      const { payload } = action;
      let { results, matches, matchesHistory } = state;
      matchesHistory.push(payload);

      return {
        ...state,
        results: setResults(results, action.payload),
        winner: action.payload,
        matches: matches = matches + 1,
        matchesHistory,
      }
    }

    case 'reset_board': {
      return {
        ...state,
        ...resetMoves,
        ...resetMatchWins,
        board: [...Array(state.boardSize).fill(null)],
        winner: null,
      }
}
    default:
      state;
  }
}

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  document.body.style.setProperty("--board-size", `${Math.sqrt(state.boardSize)}`);


  return <ContextAPI.Provider value={{ state, dispatch }}>{children}</ContextAPI.Provider>
}

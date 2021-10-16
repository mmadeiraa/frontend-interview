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

const resetState = {
  boardSize: 9,
  currentPlayer: '1',
  moves: 0,
  moveLimit: 9,
  currentMatchWins: {
    player1: 0,
    player2: 0,
  },
}

const reducer = (state, action) => {
  switch (action.type) {
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
        ...resetState,
        board: [...Array(9).fill(null)],
        currentMatchWins: { 
          ...currentMatchWins, 
          [matchPlayer]: currentMatchWins[matchPlayer] + 1,
        }
      }
    }

    case 'set_draw': {
      const { payload } = action;
      const { currentMatchWins } = state;

      return {
        ...state,
        ...resetState,
        board: [...Array(9).fill(null)],
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
        ...resetState,
        board: [...Array(9).fill(null)],
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

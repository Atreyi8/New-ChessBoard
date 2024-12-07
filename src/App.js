
import { useReducer } from "react";
import {ChessBoardContext} from "./store/context"
import { reducer,createInitialState } from "./store/reducer";
import ChessBoard from "./components/ChessBoard/ChessBoard"

function App() {
  const [state, dispatch] = useReducer(reducer, null, createInitialState);
  return (
    //wrapping chessBoard with context api
    <ChessBoardContext.Provider value={{state,dispatch}}>
      <h1>Chessboard</h1>
      <ChessBoard />
    </ChessBoardContext.Provider>

  );
}

export default App;

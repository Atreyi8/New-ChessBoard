import {createContext , useContext} from "react"
export const ChessBoardContext = createContext()

export function useChessBoardContext(){
  return useContext(ChessBoardContext)
}
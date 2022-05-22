import { ChessInstance } from "chess.js";
import ComputeMove from "./Compute";

export default function ChooseMove(board: ChessInstance): string {
  let fen = board.fen();

  if (!board.game_over()) {
    fen = ComputeMove(board);
  } else {
    console.log("BASIC says: No Legal Moves");
  }

  return fen;
}
import { useContext } from "react";
import { SnackContext } from "../context/snackContext/snackContext";

export function useSnacks() {
  return useContext(SnackContext);
}
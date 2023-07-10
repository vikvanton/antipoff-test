import { useDispatch } from "react-redux";
import { TAppDispatch } from "../types/types";

export const useAppDispatch = () => useDispatch<TAppDispatch>();

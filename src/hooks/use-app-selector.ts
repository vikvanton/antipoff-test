import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TAppState } from "../types/types";

export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;

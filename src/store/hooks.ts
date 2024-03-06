import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./config/configStore";

//후크를 사용해야 하는 모든 구성 요소 파일로 이를 가져올 수 있으며 잠재적인 순환 가져오기 종속성 문제를 피할 수 있습니다.
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

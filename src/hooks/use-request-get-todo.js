import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUpdate } from "../selectors";
import { setIsLoading, fetchData } from "../actions";
export const useRequestGetTodo = () => {
  const isUpdate = useSelector(selectIsUpdate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(fetchData());
    dispatch(setIsLoading(false));
  }, [isUpdate]);
};

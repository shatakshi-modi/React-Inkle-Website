import { getData } from "../components/EmailPanel/services";
import { setLoading, setMailData } from "./actionCreator";

export const getMailData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await getData();
    dispatch(setMailData(data));
  } catch (error) {
  } finally {
    dispatch(setLoading(false));
  }
};

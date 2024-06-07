import axios from "axios";
interface IProps {
    email: string,
    password: string
}
export const getUserDetailsAPI = async (payload: IProps) => {
    const response = await axios.post(`/api/user/login`, payload);
    return response;
};

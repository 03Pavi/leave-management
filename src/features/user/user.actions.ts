import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./user.type";
import {
    getUserDetailsAPI,
} from "@/services/user.service";
export const GetUSerDetails = createAsyncThunk(
    ACTION_TYPE.get_user_details,
    async (UserDetail: any, thunkApi) => {
        try {
            const res = await getUserDetailsAPI(UserDetail);
            if (res.status === 201) {
                return res.data;
            }
            else{
                return thunkApi.rejectWithValue(res.data);
            }
        } catch (err: any) {
            return thunkApi.rejectWithValue({
                statusCode: err.statusCode,
                message: err.message,
            });
        }
    }
)


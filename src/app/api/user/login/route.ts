import { NextResponse } from 'next/server'
import axios from "axios";
const USER_API = "/user";
const BASE_URL = `${process.env.NEXT_BACKEND_API_URL}`;
export const dynamic = 'force-dynamic'

const POST = async (
    request: Request,
) => {
    const payload = await request.json();
    const apiURL = `${BASE_URL}${USER_API}/login`;
    try {
        const response = await axios.post(apiURL, payload);
        return NextResponse.json(response.data, {
            status: response.status
        })
    } catch (err: any) {
        return NextResponse.json({ error: err.response.data }, { status: err.response.status })
    }
};
export { POST };

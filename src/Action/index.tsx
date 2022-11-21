// import axios from 'axios';
import { Dispatch } from 'react';
import {
    getListApi,
    getAreaApi,
    postFishedApi,
    getSizeApi,
    getListChaceApi
} from './api';
import {
    IS_LOADING,
    GET_LIST_SUCCESS,
    GET_AREA_SUCCESS,
    GET_SIZE_SUCCESS,
    POST_FISHED_SUCCESS,
    GET_CHACE_SUCCESS
} from './constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const isLoading = (data: boolean) => {
    return {
        type: IS_LOADING,
        data,
    };
};

export const getListSuccess = (data: any) => {
    return {
        type: GET_LIST_SUCCESS,
        payload: data,
    };
};

export const getChaceSuccess = (data: any) => {
    return {
        type: GET_CHACE_SUCCESS,
        payload: data,
    };
};

export const getAreaSuccess = (data: any) => {
    return {
        type: GET_AREA_SUCCESS,
        payload: data,
    };
};

export const getSizeSuccess = (data: any) => {
    return {
        type: GET_SIZE_SUCCESS,
        payload: data,
    };
};

export const postFishedSuccess = (data: any) => {
    return {
        type: POST_FISHED_SUCCESS,
        payload: data,
    };
};

export const getListChace = () => async (dispatch: Dispatch<any>) => {
    try {
        const resChace = await getListChaceApi();
        dispatch(getChaceSuccess({ resChace }));
    } catch (err) {
        console.log(err)
    }
};
export const getList = (params: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(isLoading(true))
        const res = await getListApi(params);
        console.log(res, 'response')
        dispatch(getListChace())
        dispatch(getListSuccess({ res }));
    } catch (error: any) {
        const err = error.response.data.errors[0]
        if (error.response.status === 400) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 500) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 401) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 403) {
            toast.error(err, { theme: "colored" })
        }
    }
    finally {
        setTimeout(() => {
            dispatch(isLoading(false));
        }, 3000);
    };
};

export const getListArea = () => async (dispatch: Dispatch<any>) => {
    try {
        const resArea = await getAreaApi();
        dispatch(getAreaSuccess({ resArea }));
    } catch (error: any) {
        const err = error.response.data.errors[0]
        if (error.response.status === 400) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 500) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 401) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 403) {
            toast.error(err, { theme: "colored" })
        }
    }
};

export const getListSize = () => async (dispatch: Dispatch<any>) => {
    try {
        const resSize = await getSizeApi();
        dispatch(getSizeSuccess({ resSize }));
    } catch (error: any) {
        const err = error.response.data.errors[0]
        if (error.response.status === 400) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 500) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 401) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 403) {
            toast.error(err, { theme: "colored" })
        }
    }
};

export const postFishedList = (data: any) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await postFishedApi(data);
        dispatch(postFishedSuccess(res));
        if (res) {
            toast.success('Data Updated')
            setTimeout(() => {
                window.location.reload()
            }, 200);
        }
    } catch (error: any) {
        const err = error.response.data.errors[0]
        if (error.response.status === 400) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 500) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 401) {
            toast.error(err, { theme: "colored" })
        }
        else if (error.response.status === 403) {
            toast.error(err, { theme: "colored" })
        }
    }
};

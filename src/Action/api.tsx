import { IParams } from '../View/Home/type';
import axios from './Helper/axiosConfig'
import mapCache from './Helper/chace';
import { GET_LIST_API } from './Helper/chaceKey';

export const getListChaceApi = async () => {
  return mapCache.fetch({
    key: GET_LIST_API,
    callback: () =>
      axios.get(
        `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?search=`
      ),
    expiresInSeconds: 12000,
  });
};

export const getListApi = async (params: any) => {
  const objParams: Record<string, any> = {}
  // const formatParam = (params) => {
  if (params.komoditas) {
    objParams.komoditas = params.komoditas
  }
  if (params.size) {
    objParams.size = params.size
  }
  if (params.price) {
    objParams.price = params.price
  }
  if (params.area_kota) {
    objParams.area_kota = params.area_kota
  }
  if (params.area_provinsi) {
    objParams.area_provinsi = params.area_provinsi
  }
  return axios.get(
    `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?search=${JSON.stringify(objParams)}`)

};
export const getAreaApi = async () => {
  return axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_area')
};
export const getSizeApi = async () => {
  return axios.get('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size');
};
export const postFishedApi = async (data: IParams) => {
  return axios.post('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list', data);
};
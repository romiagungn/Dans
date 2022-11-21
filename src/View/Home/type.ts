export type FishList = {
  uuid: string;
  area_kota: string;
  area_provinsi: string;
  komoditas: string;
  price: string;
  size: string;
  tgl_parsed: string;
  timestamp: string;
};
export type IParams = [{
  size: string;
  komoditas: string;
  area_kota: string;
  area_provinsi: string;
  price: string;
  tgl_parsed: string;
}]

export type FormValue = {
  size: string;
  komoditas: string;
  area: any;
  price: string;
  tgl_parsed: string;
}
export type AreaValue = {
    city: string;
    province: string;
}
export type Sizes = [{
  size: string
}]

export type AreaCode = [{
  city: string;
  province: string;
}]
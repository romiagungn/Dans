import { useState, useReducer } from 'react'
import { AreaCode, Sizes } from './type'
import styled from 'styled-components'

interface IFilter {
    setSearch: any;
    listArea: AreaCode;
    listSize: Sizes;
}
const Filter: React.FC<IFilter> = ({ setSearch, listArea, listSize}) => {
    const [inputValues, setInputValues] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            size: "",
            komoditas: "",
            price: "",
            area: {},
            tgl_parsed: "",
        }
    );
    const [area, setArea] =  useState({
        province: '',
        city: ''
    })
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // const { name, value } = e.target;
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setInputValues({ [fieldName]: fieldValue });
    };
    const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const fieldValue = e.target.value;
        setArea(JSON.parse(fieldValue));
    };
    const params = {
        size: inputValues.size,
        komoditas: inputValues.komoditas,
        area_kota: area.city,
        area_provinsi: area.province,
        price: inputValues.price,
    }
    const handleSubmit = () => {
        setSearch(params)
    }
    return (
        <form>
            <FilterWraper>
                <div>
                    <strong>Filter</strong>
                </div>
                <div>
                    <a href="/">Reset Filter</a>
                </div>
            </FilterWraper>
            <div className="row">
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Komoditi :</label>
                        <input
                            name="komoditas"
                            type="text"
                            className="form-control"
                            placeholder="Komodit eg Nila.."
                            defaultValue={inputValues.komoditas}
                            onChange={handleOnChange} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Size : </label>
                        <select
                            className="form-select form-select-md mb-3"
                            aria-label=".form-select-md example"
                            name="size"
                            defaultValue={inputValues.size}
                            onChange={handleOnChange}
                        >
                            <option selected>-Pilih-</option>
                            {listSize?.map((item: any, idx: number) => {
                                return (
                                    <option key={idx} value={item.size}>{item.size}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Area : </label>
                        <select
                            className="form-select form-select-md mb-3"
                            aria-label=".form-select-md example"
                            name="area"
                            onChange={handleAreaChange}
                        >
                            <option selected>-Pilih</option>
                            {listArea?.map((item: any, idx: number) => {
                                return (
                                    <option className="mb-1" key={idx} value={JSON.stringify(item)}>{item.city}, {item.province}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Price :</label>
                        <input
                            type="phone"
                            className="form-control"
                            name="price"
                            placeholder="Price/Harga"
                            defaultValue={inputValues.price}
                            onChange={handleOnChange} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Apply Filter</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Filter
const FilterWraper = styled.div`{
 display: flex;
 flex-wrap: nowrap;
 color: #379477;
 justify-content: space-between;
 margin-bottom: 20px;
}`

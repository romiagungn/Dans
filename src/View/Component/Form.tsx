import React from 'react'
import {
    AreaCode,
    FormValue,
    Sizes
} from '../Home/type'

interface IForm {
    handleOnChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleAreaChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    area: any;
    inputValues: FormValue;
    setInputValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
    listArea: AreaCode;
    listSize: Sizes;
}
const Form: React.FC<IForm> = ({ handleOnChange, handleAreaChange, inputValues, listArea, listSize, area }) => {
    return (
        <form className="needs-validation">
            <div className="row">
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">
                            Komoditi :
                        </label>
                        <input
                            name="komoditas"
                            type="text"
                            className="form-control"
                            placeholder="Komoditi e.g Nila.."
                            defaultValue={inputValues.komoditas}
                            onChange={handleOnChange}
                            required />
                        <div className="">
                            Please choose a username.
                        </div>
                    </div>

                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">
                            Size :
                        </label>
                        <select
                            className="form-select form-select-md mb-3"
                            aria-label=".form-select-md example"
                            name="size"
                            defaultValue={inputValues.size}
                            onChange={handleOnChange}
                            required
                        >
                            <option selected disabled>-Pilih-</option>
                            {listSize?.map((item: any, idx: number) => {
                                return (
                                    <option key={idx} value={item.size}>{item.size}</option>
                                )
                            })}
                        </select>
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
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
                            defaultValue={area}
                            required
                        >
                            <option selected disabled>-Pilih</option>
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
                            onChange={handleOnChange}
                            required />
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                        <label className="form-label">Tgl Parsed :</label>
                        <input
                            type="date"
                            className="form-control"
                            name="tgl_parsed"
                            placeholder="21/10/2022"
                            defaultValue={inputValues.tgl_parsed}
                            onChange={handleOnChange}
                            required />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form

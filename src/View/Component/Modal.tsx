import React, { useReducer, useState } from 'react'
import { AreaCode, Sizes } from '../Home/type'
import Form from './Form'

interface IModal {
    listArea: AreaCode;
    listSize: Sizes;
    isLoading: boolean;
}
const ModalAdd: React.FC<IModal> = ({ listArea, listSize, isLoading }) => {
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
    const [area, setArea] = useState({
        province: '',
        city: ''
    })
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setInputValues({ [fieldName]: fieldValue });
    };
    const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const fieldValue = e.target.value;
        setArea(JSON.parse(fieldValue));
    };

    const handleOnSubmit = () => {
        const payload = [{
            size: inputValues.size,
            komoditas: inputValues.komoditas,
            area_kota: area.city,
            area_provinsi: area.province,
            price: inputValues.price,
            tgl_parsed: inputValues.tgl_parsed,
        }]
        console.log(payload)
        // dispatch<any>(postFishedList(payload));
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Create New List</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form
                            handleOnChange={handleOnChange}
                            handleAreaChange={handleAreaChange}
                            area={area}
                            inputValues={inputValues}
                            setInputValues={setInputValues}
                            listArea={listArea}
                            listSize={listSize} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleOnSubmit} disabled={isLoading}>Saved</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd
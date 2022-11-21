import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList, getListArea, getListSize } from '../../Action'
import Filter from './Filter'
import Result from './Result'
import ModalAdd from '../Component/Modal'
import EmptyList from '../Empty/Empty'
import LoadingSpinner from '../Component/LoadingSpin'

const Home: React.FC<any> = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState({})

    const listData = useSelector((state: any) => state.listPerikanan.listData)
    const listArea = useSelector((state: any) => state.listPerikanan.listArea)
    const listSize = useSelector((state: any) => state.listPerikanan.listSize)
    const isLoading = useSelector((state: any) => state.listPerikanan.isLoading)

    useEffect(() => {
        dispatch<any>(getList(search))
        dispatch<any>(getListArea())
        dispatch<any>(getListSize())
    },[search, dispatch])

    const renderComp = () => {
        if (listData.length > 0) {
            return (
                <Result list={listData} />
            )
        } else {
            return (
                <EmptyList />
            )
        }
    }
    return (
        <>
            <div className="container mt-3">
                <div className="col-12 mb-3" style={{ textAlign: 'right' }}>
                    <button className="btn btn-primary"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <span> Create New </span>
                    </button>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card p-4 mb-3">
                            <Filter
                                setSearch={(i: any) => setSearch(i)}
                                listArea={listArea}
                                listSize={listSize} />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        {isLoading ? <LoadingSpinner /> : renderComp()}

                    </div>
                </div>
            </div>
            <ModalAdd
                listArea={listArea}
                listSize={listSize}
                isLoading={isLoading}
            />
        </>
    )
}

export default Home
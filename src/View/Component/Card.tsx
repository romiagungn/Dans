import React from 'react'
import currencyFormat, { formatDate } from '../../Helper/helpers'
import { FishList } from '../Home/type'
import styled from 'styled-components'

interface IFish {
    fishItem: FishList;
    idx: number;
}
const Card: React.FC<IFish> = ({ fishItem, idx }) => {
    return (
        <div className="card mb-3" key={idx} style={{ borderRadius: '30px', cursor:'pointer' }}>
            <div className="card-header text-center" style={{ backgroundColor: '#379477', color: 'white' }}>
                <h3>{fishItem?.komoditas}</h3>
            </div>
            <div className="card-body">
                <div className="col-12">
                    <div className="row">
                        <div className='col-12'>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <small style={{ marginLeft: '10px' }}>{fishItem?.area_kota}, {fishItem.area_provinsi}</small>
                        </div>
                        <div className='col-12 mb-3'>
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <small style={{ marginLeft: '10px' }}>{formatDate(fishItem?.tgl_parsed)}</small>
                        </div>
                        <SizeWraper>
                            <div>
                                <span className="badge text-bg-warning" color="white"><h5>{`IDR. ${currencyFormat(fishItem?.price, ',')}`}</h5></span>
                            </div>
                            <div>
                                <small>Size:</small>
                                <h5>{fishItem?.size}</h5>
                            </div>
                        </SizeWraper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
const SizeWraper = styled.div`{
 display: flex;
 flex-wrap: nowrap;
 color: #379477;
 cursor:pointer;
 justify-content: space-between;
}`
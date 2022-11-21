import React from 'react'
import Card from '../Component/Card'
import { FishList } from './type'

interface IList {
    list: FishList[];
}
const Result: React.FC<IList> = ({ list }) => {
    return (
        <div className="row">
            {list?.map((item: FishList, idx: number) => {
                return (
                    <div className="col-sm-4" key={idx}>
                        <Card
                            fishItem={item}
                            idx={idx} />
                    </div>
                )
            })}
        </div>
    )
}

export default Result
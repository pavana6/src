import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        villagename:'MahaDevaPatnam',
        mandalname:'UNDI'
    }
    return(
        
        
        
        <div>
                <Andhrabank info={data}/>
            <Corporationbank info={data}/>
        </div>
    )
}

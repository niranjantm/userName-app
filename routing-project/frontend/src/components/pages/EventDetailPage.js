import { Fragment } from 'react'
import {useParams} from 'react-router-dom'

export default function (){
    const param = useParams()
    return(
        <Fragment>
             <h1>EventDetailPage</h1>
             <h2>{param.id}</h2>
        </Fragment>
       
    )
}
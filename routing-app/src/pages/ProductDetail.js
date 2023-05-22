import { Fragment } from "react"
import { useParams ,Link} from "react-router-dom"
export default function ProductDetail(){

    const param = useParams()
    return(
        <Fragment>
        <h1>Product Detail</h1>
        <h1>{param.productId}</h1>
        <Link to=".." relative = "path">Back</Link>
        
        </Fragment>
    )
}
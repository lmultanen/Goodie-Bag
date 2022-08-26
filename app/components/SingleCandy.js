import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCandy, updateQuantity } from "../candyReducer";

const SingleCandy = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const candy = useSelector(state => state.candy)

    React.useEffect(() => {
        dispatch(fetchCandy(params.id))
    },[candy.name])

    const handleChange = (event) => {
        dispatch(updateQuantity(params.id,event.target.value))
    }

    return(
        <div id='single-candy'>
            <h2>{candy.name}</h2>
            <p>{candy.description}</p>
            <img src={candy.imageUrl} height='300px' width='300px'/>
            <div className='quantity-container'>
                <label>Quantity:</label>
                <input 
                    className='qty-input' 
                    type='number' 
                    defaultValue={candy.quantity}
                    onChange={handleChange}
                    min='0'
                    max='10'/>
            </div>
        </div>
    )
}

export default SingleCandy
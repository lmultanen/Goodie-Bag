import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandies } from "../candiesReducer";

const Candies = () => {
    const dispatch = useDispatch();
    const candies = useSelector(state => state.candies)

    React.useEffect(() => {
        dispatch(fetchCandies());
    },[])

    return(
        <div id='candies-list'>
            {candies.map((candy, idx) => {
                
                return(
                <div className="candy-item" key={idx}>
                    <h3>{candy.name}</h3>
                    <img src={candy.imageUrl} height='200px' width='200px'/>
                    <div>{'Description: ' } <span>{candy.description}</span></div>
                    <div>{'Quantity: '} <span>{candy.quantity}</span></div>
                </div>
                )
            })}  
        </div>
    )
}

export default Candies;
import axios from 'axios';
export const showData = (value) => dispatch => {
    axios.get(`http://localhost:3000${value}`).then((data)=>{

        dispatch({type:"data/setData",
        data:data.data})
    });
}


export const addProduct = (value) => dispatch => {
    axios.post(`http://localhost:3000${value}`,

        {  title: "iphone 8 mini", explanation: "good phone",price:"270$", imgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000" }

        ,{header:{ 'Content-type': 'application/json; charset=UTF-8' }}
    )
}
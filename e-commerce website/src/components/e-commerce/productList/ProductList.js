import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css';
import { fetchData } from '../../../redux/slices/productSlice';
function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productReducer.products)
    const status = useSelector(state => state.productReducer.status);
    const error = useSelector(state => state.productReducer.error);
    useEffect(() => {
        dispatch(fetchData());
    }, []);
    if (status === 'loading') {
        return <h2>Loading...</h2>
    }
    if (status === 'failed') {
        return <><h3>Uh oh! Something went wrong</h3>
            <p>{error}</p></>
    }
    return <div className='ProductList'>{products.map(item => <SingleProduct key={item.id} product={item} />)}</div>;
}
export default ProductList;
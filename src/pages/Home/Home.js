import React, { useEffect } from 'react';

import './Home.scss';
import Banner from '../../components/User/Banner/Banner';
// import ProductList from '../../components/ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, getAllCategories } from '../../redux/categorySlice';
import Category from '../../components/User/Category/Category';
import ProductList from '../../components/User/ProductList/ProductList';
import { fetchProducts, getAllProducts } from '../../redux/productSlice';
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const categories = useSelector(getAllCategories);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const products = useSelector(getAllProducts);

    return (
        <div>
            <Banner />
            <Category categories={categories} />

            <div className="layout">
                <div className="products-container">
                    <div className="sec-heading">Section Heading</div>
                    <div className="products">
                        <ProductList products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

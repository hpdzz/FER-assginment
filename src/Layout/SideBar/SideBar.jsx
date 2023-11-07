// import React, { useEffect } from 'react';
// import styles from './SideBar.module.scss';
// import classNames from 'classnames/bind';

// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategories } from '../../redux/CategorySlice';
// const cx = classNames.bind(styles);

// export default function SideBar() {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.category.data);

//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, []);

//     return (
//         <div>
//             <h1>Categories</h1>
//             <ul>
//                 {categories.map((category) => (
//                     <li key={category.id}>{category.category_name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
// import Pagination from '../../HomePage/Pagination';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function ProductList() {
    const [products, setProducts] = useState([]);

    const baseUrl = 'https://birdsellingapi.azurewebsites.net/api/BirdCategory/GetAll';

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await axios.get(baseUrl);
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchAPI();
    }, []);

    return (
        <>
            {products.map((product) => (
                <li key={product.id}>{product.category_name}</li>
            ))}
        </>
    );
}
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { fetchCategories } from '../../redux/CategorySlice';
// import { Link } from 'react-router-dom';

// const Categories = () => {
//     const dispatch = useDispatch();
//     const { categories, isLoading } = useSelector((state) => state.category);
//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, []);
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <>
//             {categories.map((product) => (
//                 <li key={product.id}>
//                     <Link to={`/products/${product.id}`}>{product.category_name}</Link>
//                 </li>
//             ))}
//         </>
//     );
// };

// export default Categories;

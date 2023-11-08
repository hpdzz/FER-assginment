import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9);
    // const [products, setProducts] = useState([]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleProductsPerPage = (e) => {
        const newProductsPerPage = parseInt(e.target.value, 10);
        setProductsPerPage(newProductsPerPage);
        setCurrentPage(1);
    };

    return (
        <>
            <div style={{ paddingBottom: '30px' }}>
                Products per page: {``}
                <select value={productsPerPage} onChange={handleProductsPerPage}>
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                </select>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {currentProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300px"
                                        // width="450px"
                                        image={product.image}
                                        alt={product.name}
                                        style={{ objectFit: 'contain' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.price}$
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />
        </>
    );
};
export default ProductList;

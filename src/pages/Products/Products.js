import React, { useEffect } from 'react';
import Sidebar from '../../components/User/Sidebar/Sidebar';

import './Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    fetchProductsOfCategory,
    getAllCategories,
    getAllProductsByCategory,
} from '../../redux/categorySlice';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
const Products = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const products = useSelector(getAllProductsByCategory);

    useEffect(() => {
        dispatch(fetchProductsOfCategory(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const categories = useSelector(getAllCategories);
    return (
        <div className="wrap-sidebar">
            <div className="sidebar">
                <Sidebar categories={categories} />
            </div>
            <div className="products">
                <Grid container spacing={2}>
                    {products.map((pro) => (
                        <Grid item xs={12} sm={6} md={4} style={{ padding: '20' }} key={pro.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <Link to={`/products/${pro.id}`} style={{ textDecoration: 'none' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300px"
                                            // width="450px"
                                            image={pro.image}
                                            alt={pro.name}
                                            style={{ objectFit: 'contain' }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {pro.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {pro.price}$
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Products;

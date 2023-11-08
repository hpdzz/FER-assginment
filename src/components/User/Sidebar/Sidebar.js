import React from 'react';
import './Sidebar.scss';
import { Link, useParams } from 'react-router-dom';
const Sidebar = ({ categories }) => {
    const { id: selectedCategory } = useParams();
    return (
        <div>
            <h3 className="sidebar-title">Filter By</h3>
            <div className="sidebar-content">
                <div className="sidebar-list">
                    {categories.map((category) => {
                        const isActive = category.id.toString() === selectedCategory;
                        return (
                            <div className={`sidebar-item ${isActive ? 'active' : ''}`} key={category.id}>
                                <Link to={`/products/category/${category.id}`}>{category.category_name}</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

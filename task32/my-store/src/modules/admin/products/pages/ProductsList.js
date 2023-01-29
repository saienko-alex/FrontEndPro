import {
    IconButton,
  
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import CategoryName from '../components/CategoryName';
import { NavLink } from 'react-router-dom';
import React from 'react';
import useProductsList from '../../../common/products/hooks/useProductsList';
import useProducts from '../../../common/products/hooks/useProducts';

function ProductsList() {
    const products = useProductsList();
    const {  removeProduct } = useProducts();

    return (
        <div>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <NavLink to={'./' + product.id}>
                            {product.title} - {product.categoryId} -
                            <CategoryName id={product.categoryId} />
                                <IconButton
                                    color="error"
                                    onClick={() => removeProduct(product.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                        </NavLink>
                        
                    </div>
                ))}
            </div>
            <NavLink to="./new">Add new</NavLink>
        </div>
    );
}

export default ProductsList;
// import React from 'react'
// import ProductsTable from '../components/ProductsTable';
// import { Outlet } from 'react-router-dom';

// function ProductsList() {
//   return (
//     <>
//         <ProductsTable />
//         <Outlet />
//     </>
//   )
// }

// export default ProductsList

   
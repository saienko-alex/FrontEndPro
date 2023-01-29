// import { NavLink, Outlet } from 'react-router-dom';

// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
// import { IconButton } from '@mui/material';
// import React from 'react';

// function Products() {
//     return (
//         <CategoriesProvider>
//             <Outlet />
//             <IconButton component={NavLink} to="new">
//                 <AddCircleOutlineIcon />
//             </IconButton>
//         </CategoriesProvider>
//     );
// }

// export default Products;
import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
import { Outlet } from 'react-router-dom';
import ProductsProvider from '../../../common/products/providers/ProductsProvider';
import React from 'react';

function Products() {
    return (
        <CategoriesProvider>
            <ProductsProvider>
                <Outlet />
            </ProductsProvider>
        </CategoriesProvider>
    );
}

export default Products;
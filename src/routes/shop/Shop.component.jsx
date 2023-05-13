import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../ category-preview/CategoriesPreview.component';
import Category from '../category/Category.component';

import './Shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />}/>
    </Routes>
  );
};

export default Shop;

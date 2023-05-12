import { useContext, Fragment } from 'react'
import { CategoriesContext } from '../../contexts/Categories.context'
import CategoryPreview from '../../components/category-preview/CategoryPreview.component'

import './Shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;

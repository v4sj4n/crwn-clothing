import { useContext, Fragment } from 'react'
import { CategoriesContext } from '../../contexts/Categories.context'
import CategoryPreview from '../../components/category-preview/CategoryPreview.component'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key]
        return <CategoryPreview key={key} title={key} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview

import './Directory.styles.scss'
import CategoryItem from '../category-item/CategoryItem.component'

function CategoriesContainer({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoriesContainer

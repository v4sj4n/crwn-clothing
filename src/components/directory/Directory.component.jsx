import './Directory.styles.scss'
import DirectoryItem from '../directory-item/DirectoryItem.component'

function CategoriesContainer({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoriesContainer

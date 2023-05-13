import {DirectoryContainer} from './Directory.styles'
import DirectoryItem from '../directory-item/DirectoryItem.component'

function CategoriesContainer({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  )
}

export default CategoriesContainer

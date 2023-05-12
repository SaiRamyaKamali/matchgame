const TabsList = props => {
  const {category, id, onClickCategory, isActive} = props

  const tabStyle = isActive ? 'active-category' : ''
  console.log(tabStyle)

  const onTabClick = () => {
    onClickCategory(id)
  }

  return (
    <button className={`category ${tabStyle}`} onClick={onTabClick}>
      {category}
    </button>
  )
}

export default TabsList

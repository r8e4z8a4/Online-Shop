import Button_6 from '@/Components/Common/Buttons/Button_6'
import ProductDrawer from '@/Components/Templates/Dashboard/common/ProductDrawer'
import Search from '@/Components/Templates/Dashboard/common/Search'
import useCategories from '@/Hooks/useCategories'
import React from 'react'
import { useToggle } from 'react-use'
const Search_add = ({fetchProducts}) => {
  const [isDrawerOpen,Drawertoggle]=useToggle(false)
  const { fetchData,data} = useCategories();
  const handler=()=>{
    Drawertoggle()
    fetchData()
  }
  return (
    <div className='flex-ic gap-2'>
        <Search />
        <Button_6 handler={handler}>+ ایجاد محصول</Button_6>
        <ProductDrawer fetchProducts={fetchProducts} isOpen={isDrawerOpen} onToggle={Drawertoggle} fetchData={fetchData} error={data.error} categories={data.categories} isLoading={data.isLoading}/>
    </div>
  )
}
export default Search_add
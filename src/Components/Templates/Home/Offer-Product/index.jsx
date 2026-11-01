import React from 'react'
import SectionTitle from '../../../Common/SectionTitle'
import ProductCard from '../../../Common/Cards/ProductCard'

const OfferProducts = () => {
  return (
    <section className='container my-12.5'>
        <SectionTitle text="محصولات پرتخفیف"/>
        <div className="mt-10 w-full border dark:bg-dark-bg2 border-dark-border rounded-2xl grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 *:shadow-[0_0_13px_1px_#03554e] *:rounded-2xl *:p-3 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
  )
}

export default OfferProducts
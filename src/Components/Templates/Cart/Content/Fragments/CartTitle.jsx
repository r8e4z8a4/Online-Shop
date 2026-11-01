import React from 'react'

const CartTitle = ({productsLength = 0}) => {
  return (
    <div className='flex-ic gap-2'>
        <p className='text-lg font-bold text-slate-700 dark:text-zinc-400'>
            <strong> سبد خرید شما</strong>
        </p>
        <p className='text-slate-600 dark:text-white max-[388px]:hidden min-[555px]:hidden md:block'>
            {`( ${productsLength.toLocaleString('fa-IR')} محصول )`}
        </p>
    </div>
  )
}

export default CartTitle
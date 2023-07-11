import React from 'react'
import productImg from '../public/product.png'
import { rupiahFormat } from '../functions'

const ProductCard = ({type, size}) => {
  const products = 
    {
      id: 1,
      title: "NIKE AJ1 Retro High White University Blue Shattered Backboard",
      price: 1000000,
      disc: 99,
      disc_price: 3550000
    }
  
  return (
      <div className={`min-w-[132px] md:min-w-[182px] h-full flex-col bg-slate-300 rounded-xl shadow-lg`}>
        <img className={`w-full h-full object-cover ${type === 'disabled' ? 'opacity-60' : ''}`} src={productImg} alt='Product' />
        <div className='flex flex-col gap-[0.1rem] p-2 text-left bg-white rounded-b-xl'>
          <span className='text-sm font-semibold line-clamp-2'>{products.title}</span>
          <span className='text-sm text-orange-400 font-bold'>
            {rupiahFormat(products.disc_price)}
          </span>
          <div className='flex flex-row text-2xs gap-1 items-center'>
            <h4 className='text-slate-400 line-through'>{rupiahFormat(products.price)}</h4>
            <h4 className='bg-red-300 text-red-700 rounded-xl p-[2px]'>{products.disc}%</h4>
          </div>
          <div className="mt-2">
            <button
              className={`rounded-xl w-full font-semibold text-xs p-2 ${
                type === 'disabled' ? 'bg-slate-200 text-gray-400' : 'bg-primary text-white hover:bg-blue-400'
              }`}>
              {type === 'disabled' ? 'Out of stock' : 'Add to bag'}
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProductCard
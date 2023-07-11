import './App.css';
import { Navbar, Footer, ProductCard, ScrollTopButton } from './components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useRef } from 'react';

function App() {
  const productCardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (productCardContainerRef.current) {
      productCardContainerRef.current.scroll({
        left: productCardContainerRef.current.scrollLeft - 200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (productCardContainerRef.current) {
      productCardContainerRef.current.scroll({
        left: productCardContainerRef.current.scrollLeft + 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <div className='bg-slate-100 relative'>
        <Navbar />
        <div className='z-0 flex flex-col w-full gap-4 p-4'>
          {/* section 1 & 2 */}
          <div className='hidden md:flex flex-row w-full gap-2'>
            <div className='flex w-full bg-yellow-400 justify-center items-center h-[200px] text-4xl font-bold'>1</div>
            <div className='flex w-full bg-blue-400 justify-center items-center h-[200px] text-4xl font-bold'>2</div>
          </div>
          {/* section 3 */}
          <div className='hidden md:flex bg-red-400 justify-center items-center h-[200px] text-4xl font-bold'>3</div>
          {/* section 4 */}
          <div className='hidden md:flex bg-purple-400 justify-center items-center h-[200px] text-4xl font-bold'>4</div>
          {/* section 5 */}
          <div className='flex md:hidden bg-purple-400 justify-center items-center h-[200px] text-4xl font-bold'>4</div>
          <div className='flex md:hidden bg-red-400 justify-center items-center h-[200px] text-4xl font-bold'>3</div>
          <div className='z-10 w-full h-full relative'>
            <div onClick={scrollLeft} className='absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer'>
              <AiOutlineArrowLeft />
            </div>
            <div onClick={scrollRight} className='absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer'>
              <AiOutlineArrowRight />
            </div>
            <div className='flex flex-row flex-1 gap-2 py-4 overflow-auto' ref={productCardContainerRef}>
              <ProductCard type="disabled"/>
              <ProductCard type="disabled"/>
              <ProductCard/>
              <ProductCard type="disabled" size="small"/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard type="disabled"/>
              <ProductCard type="disabled"/>
              <ProductCard type="disabled"/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </div>
          <div className='flex md:hidden flex-row w-full gap-2'>
            <div className='flex w-full bg-yellow-400 justify-center items-center h-[200px] text-4xl font-bold'>1</div>
            <div className='flex w-full bg-blue-400 justify-center items-center h-[200px] text-4xl font-bold'>2</div>
          </div>
        </div>
        <ScrollTopButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;

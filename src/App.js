import './App.css';
import { Navbar, Footer, ProductCard, ScrollTopButton } from './components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useRef, useState, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const productCardContainerRef = useRef(null);

  useEffect(() => {
    const handleInitialScrollCheck = () => {
      const container = productCardContainerRef.current;
      setScrollPosition(container.scrollLeft);
      setIsScrollable(
        container.scrollWidth - container.clientWidth > 0
      );
    };

    handleInitialScrollCheck();

    const handleScroll = () => {
      const container = productCardContainerRef.current;
      setScrollPosition(container.scrollLeft);
      setIsScrollable(
        container.scrollWidth - container.clientWidth > 0
      );
    };

    const container = productCardContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
        <div className='z-0 flex flex-col w-full gap-4 px-4 md:px-6 py-8'>
          <div className='order-4 md:order-1 flex flex-row w-full gap-4'>
            <div className='flex w-full bg-yellow-400 justify-center items-center h-[200px] text-4xl font-bold'>1</div>
            <div className='flex w-full bg-blue-400 justify-center items-center h-[200px] text-4xl font-bold'>2</div>
          </div>
          <div className='order-2 flex bg-red-400 justify-center items-center h-[200px] text-4xl font-bold'>3</div>
          <div className='order-1 md:order-3 flex bg-purple-400 justify-center items-center h-[200px] text-4xl font-bold'>4</div>
          <div className='order-3 md:order-4 z-10 w-full h-full relative'>
            {scrollPosition > 0 && (
              <div
                onClick={scrollLeft}
                className='hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-primary rounded-full w-8 h-8 items-center justify-center hover:cursor-pointer'
              >
                <AiOutlineArrowLeft color='white'/>
              </div>
            )}
            {isScrollable  && scrollPosition < productCardContainerRef.current.scrollWidth - productCardContainerRef.current.clientWidth && (
              <div
                onClick={scrollRight}
                className='hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-primary rounded-full w-8 h-8 items-center justify-center hover:cursor-pointer'
              >
                <AiOutlineArrowRight color='white'/>
              </div>
            )}
            <div className='flex flex-row flex-1 gap-2 py-4 overflow-auto' ref={productCardContainerRef}>
              <ProductCard type="disabled"/>
              <ProductCard type="disabled"/>
              <ProductCard/>
              <ProductCard type="disabled"/>
              {/* <ProductCard size="small"/> */}
              <ProductCard/>
              <ProductCard/>
              <ProductCard type="disabled"/>
              {/* <ProductCard type="disabled" size="small"/> */}
              <ProductCard type="disabled"/>
              <ProductCard type="disabled"/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </div>
        </div>
        <ScrollTopButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;

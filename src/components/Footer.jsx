import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='flex flex-col gap-6 py-8 px-4 bg-slate-200'>
      <p className={`text-xs text-justify ${isCollapsed ? 'hidden' : 'block'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus massa tempor nisi placerat suscipit. Pellentesque pellentesque nibh vel laoreet efficitur. Aliquam sodales et ex eget tempus. Donec laoreet eros justo, quis dignissim nulla eleifend scelerisque. Vestibulum eu tortor dignissim lorem pellentesque aliquam sit amet in mauris. Maecenas et felis nec erat ornare tincidunt ut quis dolor. Donec massa quam, finibus eu commodo ut, lacinia in sem. Mauris leo enim, pretium consectetur maximus sit amet, lacinia vel augue. Morbi quis odio sit amet neque ornare viverra. Ut dictum dictum sodales. Phasellus semper suscipit enim, non volutpat neque rhoncus quis. Ut dictum fermentum justo nec molestie. Vestibulum pharetra quis erat vitae sodales.
      </p>
      <div className='text-xs text-center text-blue-500 cursor-pointer'
        onClick={toggleCollapse}>
          {isCollapsed ? (
            <div className='flex flex-row gap-1 justify-center items-center'>
              <h4>Show all</h4>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div className='flex flex-row gap-1 justify-center items-center'>
              <h4>Collapse all</h4>
              <MdKeyboardArrowUp />
            </div>
          )}
      </div>
      <h4 className='text-xs text-center mt-8'>
        © 2022 PT Global Digital Niaga
      </h4>
    </div>
  );
};

export default Footer;

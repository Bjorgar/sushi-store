import React from 'react';
import './page-switch.scss';

const PageSwitch = ({ separatedItems, onPageSelected, selectedPage }) => {

  return(
    <div className="switch-box">
      {
        separatedItems.map((notUsed, idx) => {
          const clazz = (selectedPage === idx) ? 'active-button' : '';
          return <div
                  className={`switch-buttons ${clazz}`} key={idx}
                  onClick={() => onPageSelected(idx)}>
                  {idx + 1}
                 </div>
        })
      }
    </div>
  );
};

export default PageSwitch;
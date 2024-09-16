import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="arrow" onClick={toggleSidebar}>
        {isOpen ? '<' : '>'}
      </button>
      {isOpen && (
        <div className="members-list">
          <ul>
            <li>Member 1</li>
            <li>Member 2</li>
            {/* Add more members here */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

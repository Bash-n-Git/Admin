import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <table className="projects-table">
        <thead>
          <tr>
            <th>Name of Member</th>
            <th>Email ID</th>
            <th>Project Card</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/member/1">John Doe</Link></td>
            <td>john@example.com</td>
            <td><Link to="/project/1">Project A</Link></td>
            <td>2024-12-31</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div className="table-buttons">
        <Link to="/add-project"><button>Add</button></Link>
        <Link to="/edit-project"><button>Edit</button></Link>
        <Link to="/delete-project"><button>Delete</button></Link>
      </div>
    </div>
  );
}

export default MainContent;

import React, { useState } from 'react';
// import Sidebar from './Sidebar';
import './Home.css';

function HomePage() {
  const [projects, setProjects] = useState([
    { memberName: 'John Doe', email: 'john@example.com', projectName: 'Project A', deadline: '2024-12-31' }
    // Add initial projects here if needed
  ]);

  const [newProject, setNewProject] = useState({ memberName: '', email: '', projectName: '', deadline: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ memberName: '', email: '', projectName: '', deadline: '' });
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const editProject = (index) => {
    const projectToEdit = projects[index];
    setNewProject(projectToEdit);
    deleteProject(index); // Remove the project to be edited, will be re-added on save
  };

  return (
    <div className="homepage">
      {/* <Sidebar /> */}
      <div className="main-content">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Name of Member</th>
              <th>Email ID</th>
              <th>Project Name</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.memberName}</td>
                <td>{project.email}</td>
                <td>{project.projectName}</td>
                <td>{project.deadline}</td>
                <td>
                  <button onClick={() => editProject(index)}>Edit</button>
                  <button onClick={() => deleteProject(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="form-section">
          <h3>Add / Edit Project</h3>
          <input
            type="text"
            name="memberName"
            placeholder="Member Name"
            value={newProject.memberName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={newProject.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={newProject.projectName}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="deadline"
            value={newProject.deadline}
            onChange={handleInputChange}
          />
          <button onClick={addProject}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

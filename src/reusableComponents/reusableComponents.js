// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// import "./reusableComponents.css";
// // TopBar component
// export const TopBar = ({ placeholder, onSearch }) => {
//   return (
//     <div className="search">
//       <div className="searchInput">
//         <input
//           type="text"
//           placeholder={placeholder}
//           onChange={(event) => onSearch(event.target.value)}
//         />
//         <button className="searchButton" type="submit">
//           <FontAwesomeIcon icon={faMagnifyingGlass} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export const ProjectList = ({ selectedProject, onProjectClick }) => {
//   const projectTypes = ["All", "Home", "Work", "Personal"];
//   return (
//     <div className="project-list">
//       <h1>Projects</h1>
//       <ul className="menu">
//         {projectTypes.map((projectType) => (
//           <li
//             key={projectType}
//             onClick={() => onProjectClick(projectType)}
//             className={selectedProject === projectType ? "selected" : ""}
//           >
//             {projectType}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const InputForm = ({ todos, setTodos }) => {
//   const [text, setText] = useState({
//     input: "",
//     isChecked: false,
//     type: "Home",
//   });

//   const [editMode, setEditMode] = useState({});

//   const handleTypeChange = (event) => {
//     setText((prevState) => ({
//       ...prevState,
//       type: event.target.value,
//     }));
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     const newTodo = {
//       input: event.target.todo.value,
//       isChecked: false,
//       type: text.type,
//     };

//     setTodos([...todos, newTodo]);

//     // Clear the input text after submitting
//     setText((prevState) => ({
//       ...prevState,
//       input: "",
//     }));
//   };

//   const handleEditTodo = (index) => {
//     setEditMode((prevEditMode) => ({
//       ...prevEditMode,
//       [index]: true,
//     }));
//   };

//   const handleSaveTodo = (index) => {
//     setEditMode((prevEditMode) => ({
//       ...prevEditMode,
//       [index]: false,
//     }));
//   };

//   const handleDeleteTodo = (index) => {
//     setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           name="todo"
//           placeholder="Enter your task"
//           value={text.input}
//           onChange={(e) =>
//             setText((prevState) => ({ ...prevState, input: e.target.value }))
//           }
//         />
//         <label>
//           <input
//             type="radio"
//             name="type"
//             value="Home"
//             checked={text.type === "Home"}
//             onChange={handleTypeChange}
//           />
//           Home
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="type"
//             value="Work"
//             checked={text.type === "Work"}
//             onChange={handleTypeChange}
//           />
//           Work
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="type"
//             value="Personal"
//             checked={text.type === "Personal"}
//             onChange={handleTypeChange}
//           />
//           Personal
//         </label>
//         <br />
//         <button type="submit">ADD TASK</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <div className="todoListItem" key={index}>
//             {editMode[index] ? (
//               <input
//                 type="text"
//                 value={todo.input}
//                 onChange={(e) =>
//                   setTodos((prevTodos) =>
//                     prevTodos.map((t, i) =>
//                       i === index ? { ...t, input: e.target.value } : t
//                     )
//                   )
//                 }
//               />
//             ) : (
//               <li
//                 style={{ textDecoration: todo.isChecked ? "line-through" : "" }}
//               >
//                 {todo.input} - {todo.type}
//               </li>
//             )}
//             <input
//               onClick={() => {
//                 setTodos((prevTodos) => {
//                   return prevTodos.map((t, i) =>
//                     i === index ? { ...t, isChecked: !t.isChecked } : t
//                   );
//                 });
//               }}
//               type="checkbox"
//               checked={todo.isChecked}
//             />

//             {editMode[index] ? (
//               <button onClick={() => handleSaveTodo(index)}>SAVE</button>
//             ) : (
//               <button onClick={() => handleEditTodo(index)}>EDIT</button>
//             )}
//             <button onClick={() => handleDeleteTodo(index)}>DELETE</button>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // export { TopBar, ProjectList, InputForm };

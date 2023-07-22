import ProjectList from "../ProjectList/ProjectList";
import TodoList from "../TodoList/TodoList";

import "./MainContent.css";

const MainContent = ({ search }) => {
  return (
    <>
      <ProjectList />
      <TodoList search={search} />
    </>
  );
};

export default MainContent;

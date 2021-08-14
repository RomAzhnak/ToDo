import React, { useMemo } from "react";
import TodoForm from "./components/TodoForm";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearCompletedTodos, visibilityFilter } from './redux/todoSlice';

const App = () => {
  const stateTodos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClearTodos = () => {
    dispatch(clearCompletedTodos())
  };

  const handleVisibilityFilter = (reselect) => {
    dispatch(visibilityFilter(reselect));
  }

  const { countCompletedTasks, countActiveTasks } = useMemo(() => {
    // console.log('RECALCULATED')
    const countCompletedTasks = stateTodos.todos.filter
      (
        todo => todo.completed
      ).length;
    const countActiveTasks = stateTodos.todos.length - countCompletedTasks;

    return {
      countCompletedTasks,
      countActiveTasks
    }
  }, [stateTodos.todos])


  return (
    <section className="todoapp">
      <header className="header">
        <h1 className="todoapp_h1">todos</h1>
      </header>
      <section className="main" >

        <TodoForm />

      </section>
      <footer className="footer" >
        <span className="todo_count">
          {countActiveTasks} Active
        </span>
        <ul className="filters">
          <li className="filters_li">
            <a
              href="#"
              className={stateTodos.reselect === "all" ?
                "selected_filter_btn" :
                "filter_btn"
              }
              onClick={() => handleVisibilityFilter('all')}
            >
              All
            </a>
          </li>
          <li className="filters_li">
            <a href="#" className={stateTodos.reselect === "active" ?
              "selected_filter_btn" :
              "filter_btn"
            }
              onClick={() => handleVisibilityFilter('active')}
            >
              Active
            </a>
          </li>
          <li className="filters_li">
            <a href="#" className={stateTodos.reselect === "completed" ?
              "selected_filter_btn" :
              "filter_btn"
            }
              onClick={() => handleVisibilityFilter('completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="button clear_completed"
          onClick={handleClearTodos}
        >
          Clear completed [{countCompletedTasks}]
        </button>
      </footer>
    </section>
  );
}


export default App

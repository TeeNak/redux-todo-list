import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
//import TodoList from './TodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    {/*
    <TodoList todos={[]} onTodoClick={() => {}}/>
    */}
    <Footer />
  </div>
);

export default App;

import React from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import "./Home.css";
import AnimatedPage from "./Animate/Animate";

const Home = () => {
  return (
    <span className="home">
      <Header />
      <TodoForm />
      <AnimatedPage>
      <Todos />
      </AnimatedPage>
    </span>
  );
};

export default Home;

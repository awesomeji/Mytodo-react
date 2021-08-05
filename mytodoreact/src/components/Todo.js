import React from "react";
import FormInput from "./Todo/FormInput";
import List from "./Todo/List";
import Footer from "./Todo/Footer";
import { DataProvider } from "./Todo/DataProvider";

export default function Todo() {
  return (
    <DataProvider>
      <div className="todo-layout">
        <h1>ToDoList</h1>
        <div className="todo-body">
          <FormInput />
          <List />
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

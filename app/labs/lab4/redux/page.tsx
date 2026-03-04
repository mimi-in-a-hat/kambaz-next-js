"use client";

import HelloRedux from "./hello";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";
import store from "../store";
import { Provider } from "react-redux";

export default function ReduxExamples() {
 return (
   <div>
     <h2>Redux Examples</h2>
     {/* render examples with a single provider */}
     <Provider store={store}>
       <HelloRedux />
       <CounterRedux />
       <AddRedux />
       <TodoList />
     </Provider>
   </div>
 );
}

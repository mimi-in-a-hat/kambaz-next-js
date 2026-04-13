(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/labs/lab4/react-context/counter/context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CounterProvider",
    ()=>CounterProvider,
    "useCounter",
    ()=>useCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// Create the context
const CounterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CounterProvider = ({ children })=>{
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const increment = ()=>setCount((prev)=>prev + 1);
    const decrement = ()=>setCount((prev)=>prev - 1);
    const value = {
        count,
        increment,
        decrement
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/labs/lab4/react-context/counter/context.tsx",
        lineNumber: 36,
        columnNumber: 4
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CounterProvider, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c = CounterProvider;
const useCounter = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CounterContext);
    return context;
};
_s1(useCounter, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CounterProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/react-context/counter/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CounterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/react-context/counter/context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CounterContext() {
    _s();
    const { count, increment, decrement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCounter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-counter-context",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Counter Context"
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/counter/index.tsx",
                lineNumber: 11,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: count
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/counter/index.tsx",
                lineNumber: 12,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: increment,
                id: "wd-counter-context-increment-click",
                children: "Increment"
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/counter/index.tsx",
                lineNumber: 13,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: decrement,
                id: "wd-counter-context-decrement-click",
                children: "Decrement"
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/counter/index.tsx",
                lineNumber: 16,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/counter/index.tsx",
                lineNumber: 19,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/labs/lab4/react-context/counter/index.tsx",
        lineNumber: 10,
        columnNumber: 4
    }, this);
}
_s(CounterContext, "GMnn6poPNLic2qTVaQnmaJAGbGg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCounter"]
    ];
});
_c = CounterContext;
var _c;
__turbopack_context__.k.register(_c, "CounterContext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/react-context/todosContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TodosProvider",
    ()=>TodosProvider,
    "useTodos",
    ()=>useTodos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// create context
const TodosContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const TodosProvider = ({ children })=>{
    _s();
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            title: "Learn React"
        },
        {
            id: "2",
            title: "Learn Node"
        }
    ]);
    const addTodo = (todo)=>{
        setTodos([
            ...todos,
            {
                ...todo,
                id: new Date().getTime().toString()
            }
        ]);
    };
    const updateTodo = (todo)=>{
        setTodos(todos.map((t)=>t.id === todo.id ? todo : t));
    };
    const deleteTodo = (id)=>{
        setTodos(todos.filter((t)=>t.id !== id));
    };
    const value = {
        todos,
        addTodo,
        updateTodo,
        deleteTodo
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TodosContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/labs/lab4/react-context/todosContext.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TodosProvider, "4RKgDPrAtQkSvqgaqsZuv4o697E=");
_c = TodosProvider;
const useTodos = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TodosContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodosProvider");
    }
    return context;
};
_s1(useTodos, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "TodosProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/redux/todos/todosReducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTodo",
    ()=>addTodo,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteTodo",
    ()=>deleteTodo,
    "setTodo",
    ()=>setTodo,
    "updateTodo",
    ()=>updateTodo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    todos: [
        {
            id: "1",
            title: "Learn React"
        },
        {
            id: "2",
            title: "Learn Node"
        }
    ],
    todo: {
        title: "Learn Mongo"
    }
};
const todosSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const newTodos = [
                ...state.todos,
                {
                    ...action.payload,
                    id: new Date().getTime().toString()
                }
            ];
            state.todos = newTodos;
            state.todo = {
                title: ""
            };
        },
        deleteTodo: (state, action)=>{
            const newTodos = state.todos.filter((todo)=>todo.id !== action.payload);
            state.todos = newTodos;
        },
        updateTodo: (state, action)=>{
            const newTodos = state.todos.map((item)=>item.id === action.payload.id ? action.payload : item);
            state.todos = newTodos;
            state.todo = {
                title: ""
            };
        },
        setTodo: (state, action)=>{
            state.todo = action.payload;
        }
    }
});
const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
const __TURBOPACK__default__export__ = todosSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/redux/todos/TodoForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$todosReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/redux/todos/todosReducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function TodoForm() {
    _s();
    const { todo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "TodoForm.useSelector": (state)=>state.todosReducer
    }["TodoForm.useSelector"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$todosReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTodo"])(todo)),
                id: "wd-add-todo-click",
                children: " Add "
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/redux/todos/TodoForm.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$todosReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTodo"])(todo)),
                id: "wd-update-todo-click",
                children: " Update "
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/redux/todos/TodoForm.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                defaultValue: todo.title,
                onChange: (e)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$todosReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTodo"])({
                        ...todo,
                        title: e.target.value
                    }))
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/redux/todos/TodoForm.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/labs/lab4/redux/todos/TodoForm.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(TodoForm, "qatW7oz4y4o4wKq9K+jKLr+cE84=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = TodoForm;
var _c;
__turbopack_context__.k.register(_c, "TodoForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/redux/todos/TodoItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodoItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>");
;
;
function TodoItem({ todo, deleteTodo, setTodo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
        className: "p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-between align-items-center w-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "danger",
                            className: "me-2",
                            onClick: ()=>deleteTodo(todo.id),
                            id: "wd-delete-todo-click",
                            children: " Delete "
                        }, void 0, false, {
                            fileName: "[project]/app/labs/lab4/redux/todos/TodoItem.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "primary",
                            className: "me-2",
                            onClick: ()=>setTodo(todo),
                            id: "wd-set-todo-click",
                            children: " Edit "
                        }, void 0, false, {
                            fileName: "[project]/app/labs/lab4/redux/todos/TodoItem.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/labs/lab4/redux/todos/TodoItem.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ms-2",
                    children: todo.title
                }, void 0, false, {
                    fileName: "[project]/app/labs/lab4/redux/todos/TodoItem.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/labs/lab4/redux/todos/TodoItem.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, todo.id, false, {
        fileName: "[project]/app/labs/lab4/redux/todos/TodoItem.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = TodoItem;
var _c;
__turbopack_context__.k.register(_c, "TodoItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactContextTodoList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$TodoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/redux/todos/TodoForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$TodoItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/redux/todos/TodoItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$todosContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/react-context/todosContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ReactContextTodoList() {
    _s();
    const { todos, addTodo, updateTodo, deleteTodo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$todosContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTodos"])();
    const [todo, setTodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "-1",
        title: ""
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-25",
        id: "wd-context-todo-list",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Todo List"
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$TodoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        todo: todo,
                        setTodo: setTodo,
                        addTodo: addTodo,
                        updateTodo: updateTodo
                    }, void 0, false, {
                        fileName: "[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    todos.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$redux$2f$todos$2f$TodoItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            todo: t,
                            deleteTodo: deleteTodo,
                            setTodo: setTodo
                        }, t.id, false, {
                            fileName: "[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ReactContextTodoList, "E8VTCjyc7Y1Fmdb0n5I3qoMVGhU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$todosContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTodos"]
    ];
});
_c = ReactContextTodoList;
var _c;
__turbopack_context__.k.register(_c, "ReactContextTodoList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/labs/lab4/react-context/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactContextExamples
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/react-context/counter/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/react-context/counter/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$todosContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/react-context/todosContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$ReactContextTodoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/labs/lab4/react-context/ReactContextTodoList.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ReactContextExamples() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "React Context Examples"
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/page.tsx",
                lineNumber: 10,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CounterProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$counter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/labs/lab4/react-context/page.tsx",
                    lineNumber: 12,
                    columnNumber: 8
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/page.tsx",
                lineNumber: 11,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$todosContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TodosProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$labs$2f$lab4$2f$react$2d$context$2f$ReactContextTodoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/labs/lab4/react-context/page.tsx",
                    lineNumber: 15,
                    columnNumber: 8
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/labs/lab4/react-context/page.tsx",
                lineNumber: 14,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/labs/lab4/react-context/page.tsx",
        lineNumber: 9,
        columnNumber: 4
    }, this);
}
_c = ReactContextExamples;
var _c;
__turbopack_context__.k.register(_c, "ReactContextExamples");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_labs_lab4_909ae17c._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAttempt",
    ()=>createAttempt,
    "createQuiz",
    ()=>createQuiz,
    "deleteQuiz",
    ()=>deleteQuiz,
    "findAttemptsByQuizAndUser",
    ()=>findAttemptsByQuizAndUser,
    "findLatestAttempt",
    ()=>findLatestAttempt,
    "findQuizById",
    ()=>findQuizById,
    "findQuizzesForCourse",
    ()=>findQuizzesForCourse,
    "getAttemptCount",
    ()=>getAttemptCount,
    "updateAttempt",
    ()=>updateAttempt,
    "updateQuiz",
    ()=>updateQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Quiz API client 
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const QUIZZES_API = `${HTTP_SERVER}/api`;
const findQuizzesForCourse = async (courseId)=>{
    const res = await axiosWithCredentials.get(`${QUIZZES_API}/courses/${courseId}/quizzes`);
    return res.data;
};
const createQuiz = async (courseId, quiz)=>{
    const res = await axiosWithCredentials.post(`${QUIZZES_API}/courses/${courseId}/quizzes`, quiz);
    return res.data;
};
const updateQuiz = async (quizId, updates)=>{
    const res = await axiosWithCredentials.put(`${QUIZZES_API}/quizzes/${quizId}`, updates);
    return res.data;
};
const deleteQuiz = async (quizId)=>{
    const res = await axiosWithCredentials.delete(`${QUIZZES_API}/quizzes/${quizId}`);
    return res.data;
};
const findQuizById = async (quizId)=>{
    const res = await axiosWithCredentials.get(`${QUIZZES_API}/quizzes/${quizId}`);
    return res.data;
};
const findAttemptsByQuizAndUser = async (quizId, userId)=>{
    const res = await axiosWithCredentials.get(`${QUIZZES_API}/quizzes/${quizId}/users/${userId}/attempts`);
    return res.data;
};
const findLatestAttempt = async (quizId, userId)=>{
    const res = await axiosWithCredentials.get(`${QUIZZES_API}/quizzes/${quizId}/users/${userId}/latest`);
    return res.data;
};
const createAttempt = async (attempt)=>{
    const res = await axiosWithCredentials.post(`${QUIZZES_API}/quiz-attempts`, attempt);
    return res.data;
};
const updateAttempt = async (attemptId, updates)=>{
    const res = await axiosWithCredentials.put(`${QUIZZES_API}/quiz-attempts/${attemptId}`, updates);
    return res.data;
};
const getAttemptCount = async (quizId, userId)=>{
    const res = await axiosWithCredentials.get(`${QUIZZES_API}/quizzes/${quizId}/users/${userId}/count`);
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MCQEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
;
;
function MCQEditor({ question, setQuestion }) {
    const handleFieldChange = (e)=>{
        const { name, value } = e.target;
        setQuestion({
            ...question,
            [name]: name === "points" ? Number(value) || 0 : value
        });
    };
    const handleChoiceChange = (index, value)=>{
        const updated = [
            ...question.choices
        ];
        updated[index] = value;
        setQuestion({
            ...question,
            choices: updated
        });
    };
    const handleAddChoice = ()=>{
        setQuestion({
            ...question,
            choices: [
                ...question.choices,
                `Option ${question.choices.length + 1}`
            ]
        });
    };
    const handleRemoveChoice = (index)=>{
        const updated = question.choices.filter((_, i)=>i !== index);
        let correct = question.correctAnswer;
        if (!updated.includes(correct) && updated.length > 0) {
            correct = updated[0];
        }
        setQuestion({
            ...question,
            choices: updated,
            correctAnswer: correct
        });
    };
    const handleCorrectChange = (choice)=>{
        setQuestion({
            ...question,
            correctAnswer: choice
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Question Text"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        as: "textarea",
                        rows: 3,
                        name: "questionText",
                        value: question.questionText,
                        onChange: handleFieldChange
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                style: {
                    maxWidth: "150px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Points"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        type: "number",
                        name: "points",
                        value: question.points,
                        onChange: handleFieldChange
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Answer Choices"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    question.choices.map((choice, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex align-items-center mb-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                    type: "radio",
                                    name: "correctChoice",
                                    checked: question.correctAnswer === choice,
                                    onChange: ()=>handleCorrectChange(choice),
                                    className: "me-2"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                    type: "text",
                                    value: choice,
                                    onChange: (e)=>handleChoiceChange(index, e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                question.choices.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "outline-danger",
                                    size: "sm",
                                    onClick: ()=>handleRemoveChoice(index),
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "outline-secondary",
                        size: "sm",
                        className: "mt-2",
                        onClick: handleAddChoice,
                        children: "+ Add Choice"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted small",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Correct Answer:"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    " ",
                    question.correctAnswer
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = MCQEditor;
var _c;
__turbopack_context__.k.register(_c, "MCQEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TFEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
//  True/False Question Editor 
//we need handle addQuestions
//we need handle editquestion --> i think this already exists?
//handle delete question
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
;
;
function TFEditor({ question, setQuestion }) {
    const handleFieldChange = (e)=>{
        const { name, value } = e.target;
        setQuestion({
            ...question,
            [name]: name === "points" ? Number(value) || 0 : value
        });
    };
    const handleCorrectChange = (value)=>{
        setQuestion({
            ...question,
            correctAnswer: value
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Question Text"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        as: "textarea",
                        rows: 3,
                        name: "questionText",
                        value: question.questionText,
                        onChange: handleFieldChange
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                style: {
                    maxWidth: "150px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Points"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        type: "number",
                        name: "points",
                        value: question.points,
                        onChange: handleFieldChange
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Correct Answer"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex flex-column gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                type: "radio",
                                label: "True",
                                checked: question.correctAnswer === "true",
                                onChange: ()=>handleCorrectChange("true")
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                type: "radio",
                                label: "False",
                                checked: question.correctAnswer === "false",
                                onChange: ()=>handleCorrectChange("false")
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted small",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Correct Answer:"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    " ",
                    question.correctAnswer
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = TFEditor;
var _c;
__turbopack_context__.k.register(_c, "TFEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FIBEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Fill-in-the-Blank Question Editor 
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
;
;
function FIBEditor({ question, setQuestion }) {
    const handleFieldChange = (e)=>{
        const { name, value } = e.target;
        setQuestion({
            ...question,
            [name]: name === "points" ? Number(value) || 0 : value
        });
    };
    const answers = question.answers && question.answers.length ? question.answers : [
        ""
    ];
    const handleAnswerChange = (index, value)=>{
        const newAnswers = [
            ...answers
        ];
        newAnswers[index] = value;
        setQuestion({
            ...question,
            answers: newAnswers,
            // keep a primary correct answer for grading
            correctAnswer: newAnswers[0] || ""
        });
    };
    const addAnswer = ()=>{
        const newAnswers = [
            ...answers,
            ""
        ];
        setQuestion({
            ...question,
            answers: newAnswers
        });
    };
    const removeAnswer = (index)=>{
        const newAnswers = [
            ...answers
        ];
        newAnswers.splice(index, 1);
        if (newAnswers.length === 0) {
            newAnswers.push("");
        }
        setQuestion({
            ...question,
            answers: newAnswers,
            correctAnswer: newAnswers[0] || ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Question Text"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        as: "textarea",
                        rows: 3,
                        name: "questionText",
                        value: question.questionText || "",
                        onChange: handleFieldChange
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-3",
                style: {
                    maxWidth: "150px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: "Points"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        type: "number",
                        name: "points",
                        value: question.points ?? 1,
                        onChange: handleFieldChange
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                        children: " Fill in the answer (one per blank)"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    answers.map((ans, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                    type: "text",
                                    value: ans,
                                    onChange: (e)=>handleAnswerChange(index, e.target.value),
                                    placeholder: index === 0 ? "Answer #1" : `Additional answer ${index + 1}`
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "outline-danger",
                                    size: "sm",
                                    onClick: ()=>removeAnswer(index),
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "primary",
                        size: "sm",
                        onClick: addAnswer,
                        className: "mt-1",
                        children: "Add another field"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted small",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Primary Correct Answer:"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    " ",
                    answers[0] ? answers[0] : "None yet"
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = FIBEditor;
var _c;
__turbopack_context__.k.register(_c, "FIBEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionEditorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Quizzes/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f5b$qid$5d2f$questions$2f5b$questionId$5d2f$mcq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/mcq.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f5b$qid$5d2f$questions$2f5b$questionId$5d2f$tf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/tf.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f5b$qid$5d2f$questions$2f5b$questionId$5d2f$fib$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/fib.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function QuestionEditorPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const courseId = params.cid;
    const quizId = params.qid;
    const questionId = params.questionId;
    const [quiz, setQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load quiz AND current question (or default new which is the multiple choice!)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionEditorPage.useEffect": ()=>{
            const load = {
                "QuestionEditorPage.useEffect.load": async ()=>{
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findQuizById"](quizId);
                    const questions = data.questions || [];
                    let current;
                    if (questionId === "new") {
                        current = {
                            type: "MCQ",
                            questionText: "New Question",
                            points: 1,
                            choices: [
                                "Option 1",
                                "Option 2",
                                "Option 3",
                                "Option 4"
                            ],
                            correctAnswer: "Option 1"
                        };
                    } else {
                        current = questions.find({
                            "QuestionEditorPage.useEffect.load": (q)=>q._id === questionId || q._id?.toString?.() === questionId || q._id?.$oid === questionId
                        }["QuestionEditorPage.useEffect.load"]);
                    }
                    setQuiz(data);
                    setQuestion(current || {
                        type: "MCQ",
                        questionText: "",
                        points: 1,
                        choices: [
                            "Option 1",
                            "Option 2"
                        ],
                        correctAnswer: "Option 1"
                    });
                    setLoading(false);
                }
            }["QuestionEditorPage.useEffect.load"];
            load();
        }
    }["QuestionEditorPage.useEffect"], [
        quizId,
        questionId
    ]);
    const handleCancel = ()=>{
        router.push(`/courses/${courseId}/quizzes/${quizId}/questions`);
    };
    const handleSave = async ()=>{
        if (!quiz || !question) return;
        const existing = quiz.questions || [];
        let updatedQuestions;
        if (questionId === "new") {
            updatedQuestions = [
                ...existing,
                question
            ];
        } else {
            updatedQuestions = existing.map((q)=>{
                if (q._id === questionId || q._id?.toString?.() === questionId || q._id?.$oid === questionId) {
                    return {
                        ...q,
                        ...question
                    };
                }
                return q;
            });
        }
        const totalPoints = updatedQuestions.reduce((sum, q)=>sum + (q.points || 0), 0);
        const updatedQuiz = {
            ...quiz,
            questions: updatedQuestions,
            points: totalPoints,
            numberOfQuestions: updatedQuestions.length
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateQuiz"](quizId, updatedQuiz);
        router.push(`/courses/${courseId}/quizzes/${quizId}/questions`);
    };
    const handleTypeChange = (newType)=>{
        if (!question) return;
        setQuestion((prev)=>{
            const base = {
                ...prev,
                type: newType,
                questionText: prev.questionText || "",
                points: prev.points ?? 1
            };
            if (newType === "TF") {
                return {
                    ...base,
                    correctAnswer: prev.correctAnswer === "false" || prev.correctAnswer === false ? "false" : "true"
                };
            }
            if (newType === "FIB") {
                return {
                    ...base,
                    answers: prev.answers || [
                        ""
                    ]
                };
            }
            // Multiple Choice default answer
            return {
                ...base,
                choices: prev.choices && prev.choices.length ? prev.choices : [
                    "Option 1",
                    "Option 2"
                ],
                correctAnswer: prev.correctAnswer || "Option 1"
            };
        });
    };
    if (loading || !quiz || !question) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3",
            children: "Loading question..."
        }, void 0, false, {
            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
            lineNumber: 148,
            columnNumber: 12
        }, this);
    }
    const type = (question.type || "MCQ").toUpperCase();
    let editorBody;
    if (type === "TF") {
        editorBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f5b$qid$5d2f$questions$2f5b$questionId$5d2f$tf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            question: question,
            setQuestion: setQuestion
        }, void 0, false, {
            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
            lineNumber: 155,
            columnNumber: 18
        }, this);
    } else if (type === "FIB") {
        editorBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f5b$qid$5d2f$questions$2f5b$questionId$5d2f$fib$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            question: question,
            setQuestion: setQuestion
        }, void 0, false, {
            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
            lineNumber: 157,
            columnNumber: 18
        }, this);
    } else {
        editorBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f5b$qid$5d2f$questions$2f5b$questionId$5d2f$mcq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            question: question,
            setQuestion: setQuestion
        }, void 0, false, {
            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
            lineNumber: 159,
            columnNumber: 18
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                        className: "d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Question Editor"
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Select, {
                                style: {
                                    maxWidth: "220px"
                                },
                                value: type,
                                onChange: (e)=>handleTypeChange(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MCQ",
                                        children: "Multiple Choice"
                                    }, void 0, false, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "TF",
                                        children: "True / False"
                                    }, void 0, false, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "FIB",
                                        children: "Fill in the Blank"
                                    }, void 0, false, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                        children: editorBody
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "secondary",
                        onClick: handleCancel,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "danger",
                        onClick: handleSave,
                        children: "Save Question"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/questions/[questionId]/page.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(QuestionEditorPage, "wXNUfyF1qxHfOWt344SAsGE1+Es=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuestionEditorPage;
var _c;
__turbopack_context__.k.register(_c, "QuestionEditorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=kambaz-next-js_app_%28kambaz%29_Quizzes_6e56561c._.js.map
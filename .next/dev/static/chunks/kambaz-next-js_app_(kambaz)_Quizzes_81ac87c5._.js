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
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Quizzes/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// Quiz Preview 
"use client";
;
;
;
;
;
function QuizPreview() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const courseId = params.cid;
    const quizId = params.qid;
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "QuizPreview.useSelector[currentUser]": (state)=>state.accountReducer.currentUser
    }["QuizPreview.useSelector[currentUser]"]);
    const [quiz, setQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        points: 0,
        questions: [],
        timeLimit: 20
    });
    // NOTE: allow string OR string[] (for multiple FIB blanks)
    const [selectedAnswers, setSelectedAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastSavedTime, setLastSavedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fetchQuiz = async ()=>{
        if (!quizId) return;
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findQuizById"](quizId);
        if (data) {
            setQuiz(data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizPreview.useEffect": ()=>{
            fetchQuiz();
        }
    }["QuizPreview.useEffect"], [
        quizId
    ]);
    // For MCQ + TF (single value)
    const handleAnswerChange = (questionIndex, answer)=>{
        if (isSubmitted) return; // Don't allow changes after submission
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answer
        });
        updateSavedTime();
    };
    // For FIB (multiple blanks)
    const handleFibAnswerChange = (questionIndex, blankIndex, value, totalBlanks)=>{
        if (isSubmitted) return;
        const existing = selectedAnswers[questionIndex];
        let arr = [];
        if (Array.isArray(existing)) {
            arr = [
                ...existing
            ];
        } else {
            arr = Array(totalBlanks).fill("");
        }
        arr[blankIndex] = value;
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: arr
        });
        updateSavedTime();
    };
    const updateSavedTime = ()=>{
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
        setLastSavedTime(timeString);
    };
    const calculateScore = ()=>{
        let totalScore = 0;
        quiz.questions.forEach((question, index)=>{
            const userAnswer = selectedAnswers[index];
            // FILL-IN-THE-BLANK: multiple blanks
            if (question.type === "FIB") {
                const correctAnswers = question.answers || [];
                if (!Array.isArray(userAnswer) || correctAnswers.length === 0) return;
                const normalizedCorrect = correctAnswers.map((a)=>a?.toString().trim().toLowerCase());
                const normalizedUser = userAnswer.map((a)=>(a || "").toString().trim().toLowerCase());
                const allMatch = normalizedCorrect.every((ans, i)=>(normalizedUser[i] || "") === ans);
                if (allMatch) {
                    totalScore += question.points || 0;
                }
                return;
            }
            // MCQ / TF (single answer)
            if (!userAnswer) return; // Skip unanswered questions
            const correctAnswer = question.correctAnswer?.toString().trim().toLowerCase();
            const providedAnswer = userAnswer.toString().trim().toLowerCase();
            if (correctAnswer === providedAnswer) {
                totalScore += question.points || 0;
            }
        });
        return totalScore;
    };
    const handleSubmit = ()=>{
        const calculatedScore = calculateScore();
        setScore(calculatedScore);
        setIsSubmitted(true);
    };
    const handleEditQuiz = ()=>{
        router.push(`/courses/${courseId}/quizzes/${quizId}/questions`);
    };
    const handleBack = ()=>{
        router.push(`/courses/${courseId}/quizzes/${quizId}`);
    };
    const handleNextQuestion = ()=>{
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            updateSavedTime();
        }
    };
    const handlePreviousQuestion = ()=>{
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            updateSavedTime();
        }
    };
    const handleJumpToQuestion = (index)=>{
        setCurrentQuestionIndex(index);
        updateSavedTime();
    };
    const isAnswerCorrect = (questionIndex)=>{
        const question = quiz.questions[questionIndex];
        const userAnswer = selectedAnswers[questionIndex];
        if (!question) return false;
        // FIB correctness (all blanks must match)
        if (question.type === "FIB") {
            const correctAnswers = question.answers || [];
            if (!Array.isArray(userAnswer) || correctAnswers.length === 0) return false;
            const normalizedCorrect = correctAnswers.map((a)=>a?.toString().trim().toLowerCase());
            const normalizedUser = userAnswer.map((a)=>(a || "").toString().trim().toLowerCase());
            return normalizedCorrect.every((ans, i)=>(normalizedUser[i] || "") === ans);
        }
        // MCQ / TF (single answer)
        if (!userAnswer || !question.correctAnswer) return false;
        const correctAnswer = question.correctAnswer.toString().trim().toLowerCase();
        const providedAnswer = userAnswer.toString().trim().toLowerCase();
        return correctAnswer === providedAnswer;
    };
    if (!currentUser) return null;
    const totalPoints = quiz.questions.reduce((sum, q)=>sum + (q.points || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-between align-items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: quiz.title
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                    variant: score === totalPoints ? "success" : "info",
                                    className: "mb-0 py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "Quiz Score: ",
                                            score,
                                            " / ",
                                            totalPoints,
                                            " points"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2",
                        children: [
                            [
                                "FACULTY",
                                "ADMIN"
                            ].includes(currentUser.role) && !isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "secondary",
                                onClick: handleEditQuiz,
                                children: "✏️ Edit"
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "secondary",
                                onClick: handleBack,
                                children: "Back to Details"
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                variant: "danger",
                className: "mb-3",
                children: "ⓘ This is a preview of the published version of the quiz"
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            !isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: [
                            "Started:",
                            " ",
                            new Date().toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "2-digit"
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    quiz.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: quiz.description
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 266,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Quiz Instructions"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this),
            quiz.questions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "text-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted",
                        children: "This quiz has no questions yet."
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 276,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this),
            quiz.questions.length > 0 && (()=>{
                const qIndex = currentQuestionIndex;
                const question = quiz.questions[qIndex];
                const correct = isSubmitted && isAnswerCorrect(qIndex);
                const incorrect = isSubmitted && selectedAnswers[qIndex] && !correct;
                const isFillInBlank = question.type === "FIB";
                const isTrueFalse = question.type === "TF";
                // For FIB we use answers[] to determine # of blanks
                const fibCorrectAnswers = question.answers && question.answers.length > 0 ? question.answers : question.correctAnswer ? [
                    question.correctAnswer
                ] : [];
                const fibBlanksCount = isFillInBlank && fibCorrectAnswers.length > 0 ? fibCorrectAnswers.length : 1;
                const fibUserAnswers = Array.isArray(selectedAnswers[qIndex]) ? selectedAnswers[qIndex] : [];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                    className: `mb-3 ${isSubmitted ? correct ? "border-success" : incorrect ? "border-danger" : "" : ""}`,
                    style: isSubmitted ? {
                        borderWidth: "2px"
                    } : {},
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Header, {
                            className: "d-flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "me-2",
                                            children: correct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-success"
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 25
                                            }, this) : incorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-danger"
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "Question ",
                                                qIndex + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted",
                                    children: [
                                        question.points,
                                        " pts"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                            lineNumber: 322,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3",
                                    children: question.questionText
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                                    children: !isFillInBlank && !isTrueFalse && question.choices && question.choices.length > 0 ? // MCQ: show provided choices
                                    question.choices.map((choice, cIndex)=>{
                                        const isSelected = selectedAnswers[qIndex] === choice;
                                        const isCorrectChoice = isSubmitted && choice.toLowerCase().trim() === question.correctAnswer?.toLowerCase().trim();
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                            type: "radio",
                                            name: `question-${qIndex}`,
                                            id: `q${qIndex}-choice${cIndex}`,
                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    choice,
                                                    isSubmitted && isCorrectChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ms-2 text-success fw-bold",
                                                        children: "Correct"
                                                    }, void 0, false, {
                                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 33
                                                    }, void 0),
                                                    isSubmitted && isSelected && !isCorrectChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ms-2 text-danger fw-bold",
                                                        children: "Your answer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 35
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 29
                                            }, void 0),
                                            value: choice,
                                            checked: isSelected,
                                            onChange: (e)=>handleAnswerChange(qIndex, e.target.value),
                                            className: `mb-2 ${isSubmitted && isCorrectChoice ? "text-success fw-bold" : ""}`,
                                            disabled: isSubmitted
                                        }, cIndex, false, {
                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 25
                                        }, this);
                                    }) : isTrueFalse ? // TRUE/FALSE: always show exactly two options
                                    [
                                        "True",
                                        "False"
                                    ].map((choice, cIndex)=>{
                                        const isSelected = selectedAnswers[qIndex] === choice;
                                        const isCorrectChoice = isSubmitted && choice.toLowerCase().trim() === question.correctAnswer?.toLowerCase().trim();
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Check, {
                                            type: "radio",
                                            name: `question-${qIndex}`,
                                            id: `q${qIndex}-tf-${cIndex}`,
                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    choice,
                                                    isSubmitted && isCorrectChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ms-2 text-success fw-bold",
                                                        children: "Correct"
                                                    }, void 0, false, {
                                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 33
                                                    }, void 0),
                                                    isSubmitted && isSelected && !isCorrectChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ms-2 text-danger fw-bold",
                                                        children: "Your answer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 35
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 29
                                            }, void 0),
                                            value: choice,
                                            checked: isSelected,
                                            onChange: (e)=>handleAnswerChange(qIndex, e.target.value),
                                            className: `mb-2 ${isSubmitted && isCorrectChoice ? "text-success fw-bold" : ""}`,
                                            disabled: isSubmitted
                                        }, cIndex, false, {
                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 25
                                        }, this);
                                    }) : // FIB: multiple blanks based on answers[]
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            Array.from({
                                                length: fibBlanksCount
                                            }).map((_, blankIndex)=>{
                                                const correctText = fibCorrectAnswers[blankIndex] || "";
                                                const userText = fibUserAnswers[blankIndex] || "";
                                                const thisBlankCorrect = isSubmitted && userText.toString().trim().toLowerCase() === correctText.toString().trim().toLowerCase();
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                    className: "mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                            children: [
                                                                "Blank ",
                                                                blankIndex + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                            type: "text",
                                                            placeholder: "Enter your answer",
                                                            value: userText,
                                                            onChange: (e)=>handleFibAnswerChange(qIndex, blankIndex, e.target.value, fibBlanksCount),
                                                            disabled: isSubmitted,
                                                            className: isSubmitted ? thisBlankCorrect ? "border-success" : "border-danger" : ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, blankIndex, true, {
                                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 29
                                                }, this);
                                            }),
                                            isSubmitted && fibCorrectAnswers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Text, {
                                                className: correct ? "text-success" : "text-danger",
                                                children: [
                                                    "Correct answers: ",
                                                    fibCorrectAnswers.join(", ")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                            lineNumber: 339,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                    lineNumber: 310,
                    columnNumber: 13
                }, this);
            })(),
            quiz.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-between align-items-center mb-4",
                children: [
                    currentQuestionIndex > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "secondary",
                        onClick: handlePreviousQuestion,
                        children: "‹ Previous"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 499,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 503,
                        columnNumber: 13
                    }, this),
                    currentQuestionIndex < quiz.questions.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "secondary",
                        onClick: handleNextQuestion,
                        children: "Next ›"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 506,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 497,
                columnNumber: 9
            }, this),
            !isSubmitted && quiz.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "mt-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                    className: "d-flex justify-content-end align-items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted",
                            children: lastSavedTime && `Quiz saved at ${lastSavedTime}`
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "secondary",
                            onClick: handleSubmit,
                            children: "Submit Quiz"
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                    lineNumber: 516,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 515,
                columnNumber: 9
            }, this),
            quiz.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "mb-3",
                        children: "Questions"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 530,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex flex-column gap-2 ms-3",
                        children: quiz.questions.map((_, idx)=>{
                            const isCurrent = idx === currentQuestionIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleJumpToQuestion(idx);
                                },
                                style: {
                                    color: "red",
                                    fontWeight: isCurrent ? "bold" : "normal",
                                    textDecoration: "none",
                                    cursor: "pointer"
                                },
                                children: [
                                    "Question ",
                                    idx + 1
                                ]
                            }, idx, true, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                lineNumber: 536,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this),
            isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "mt-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            children: [
                                "Quiz submitted at",
                                " ",
                                new Date().toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "2-digit"
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                            lineNumber: 562,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "secondary",
                                    onClick: handleEditQuiz,
                                    className: "me-2",
                                    children: "✏️ Edit"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "primary",
                                    onClick: handleBack,
                                    children: "Back to Quiz Details"
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                    lineNumber: 561,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
                lineNumber: 560,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/Preview/page.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s(QuizPreview, "mmwDad754huIxCpYzGuHf0YDaE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = QuizPreview;
var _c;
__turbopack_context__.k.register(_c, "QuizPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=kambaz-next-js_app_%28kambaz%29_Quizzes_81ac87c5._.js.map
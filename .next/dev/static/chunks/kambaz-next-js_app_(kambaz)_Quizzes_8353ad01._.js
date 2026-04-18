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
"[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentQuizTaking
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
// Student Quiz Taking Screen
"use client";
;
;
;
;
;
function StudentQuizTaking() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const courseId = params.cid;
    const quizId = params.qid;
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "StudentQuizTaking.useSelector[currentUser]": (state)=>state.accountReducer.currentUser
    }["StudentQuizTaking.useSelector[currentUser]"]);
    const [quiz, setQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        points: 0,
        questions: [],
        timeLimit: 20,
        multipleAttempts: false,
        howManyAttempts: 1,
        oneQuestionAtATime: true
    });
    // string for MCQ/TF, string[] for FIB (in React state only)
    const [selectedAnswers, setSelectedAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastSavedTime, setLastSavedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentAttempt, setCurrentAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attemptCount, setAttemptCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [latestAttempt, setLatestAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingPreviousAttempt, setViewingPreviousAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchQuiz = async ()=>{
        if (!quizId) return;
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findQuizById"](quizId);
        if (data) {
            setQuiz(data);
        }
    };
    const fetchAttemptData = async ()=>{
        if (!quizId || !currentUser) return;
        try {
            // Get attempt count
            const countData = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttemptCount"](quizId, currentUser._id);
            setAttemptCount(Math.max(0, countData.count || 0));
            // Get latest attempt
            const latest = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLatestAttempt"](quizId, currentUser._id);
            if (latest && latest.isSubmitted) {
                setLatestAttempt(latest);
                setViewingPreviousAttempt(true);
                setIsSubmitted(true);
                // Restore answers into state (parse JSON for FIB if needed)
                const answersMap = {};
                if (latest.answers && Array.isArray(latest.answers)) {
                    latest.answers.forEach((ans)=>{
                        let value = ans.answer;
                        if (typeof value === "string" && value.trim().startsWith("[")) {
                            try {
                                value = JSON.parse(value);
                            } catch  {
                            // leave as string if not valid JSON
                            }
                        }
                        answersMap[ans.questionIndex] = value;
                    });
                }
                setSelectedAnswers(answersMap);
                setScore(latest.score || 0);
            }
        } catch (error) {
            console.error("Error fetching attempt data:", error);
            setAttemptCount(0);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentQuizTaking.useEffect": ()=>{
            fetchQuiz();
            fetchAttemptData();
        }
    }["StudentQuizTaking.useEffect"], [
        quizId,
        currentUser
    ]);
    // MCQ + TF single-answer handler
    const handleAnswerChange = (questionIndex, answer)=>{
        if (isSubmitted || viewingPreviousAttempt) return;
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answer
        });
        updateSavedTime();
        saveProgress(questionIndex, answer);
    };
    // FIB: multi-blank handler (array in state)
    const handleFibAnswerChange = (questionIndex, blankIndex, value, totalBlanks)=>{
        if (isSubmitted || viewingPreviousAttempt) return;
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
        saveProgress(questionIndex, arr);
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
    // IMPORTANT: in DB, always store answer as a string (JSON for FIB)
    const saveProgress = async (questionIndex, answer)=>{
        if (!currentUser || viewingPreviousAttempt) return;
        const persistedAnswer = Array.isArray(answer) ? JSON.stringify(answer) : answer;
        try {
            if (!currentAttempt) {
                const countData = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttemptCount"](quizId, currentUser._id);
                const freshCount = Math.max(0, countData.count || 0);
                const maxAttempts = quiz.multipleAttempts ? quiz.howManyAttempts || 1 : 1;
                if (freshCount >= maxAttempts) {
                    alert("You have already used all available attempts for this quiz.");
                    setViewingPreviousAttempt(true);
                    return;
                }
                const newAttempt = {
                    quizId,
                    userId: currentUser._id,
                    courseId,
                    attemptNumber: freshCount + 1,
                    answers: [
                        {
                            questionIndex,
                            answer: persistedAnswer,
                            isCorrect: false
                        }
                    ],
                    score: 0,
                    totalPoints: quiz.questions.reduce((sum, q)=>sum + (q.points || 0), 0),
                    isSubmitted: false
                };
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAttempt"](newAttempt);
                setCurrentAttempt(created);
                setAttemptCount(freshCount);
            } else {
                const updatedAnswers = [
                    ...currentAttempt.answers || []
                ];
                const existingIndex = updatedAnswers.findIndex((a)=>a.questionIndex === questionIndex);
                if (existingIndex >= 0) {
                    updatedAnswers[existingIndex] = {
                        questionIndex,
                        answer: persistedAnswer,
                        isCorrect: false
                    };
                } else {
                    updatedAnswers.push({
                        questionIndex,
                        answer: persistedAnswer,
                        isCorrect: false
                    });
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAttempt"](currentAttempt._id, {
                    answers: updatedAnswers
                });
                setCurrentAttempt({
                    ...currentAttempt,
                    answers: updatedAnswers
                });
            }
        } catch (error) {
            console.error("Error saving progress:", error);
        }
    };
    // Scoring: FIB uses arrays in state; answers we return use strings for DB
    const calculateScore = ()=>{
        let totalScore = 0;
        const answersWithCorrectness = [];
        quiz.questions.forEach((question, index)=>{
            const userAnswer = selectedAnswers[index];
            // Unanswered
            if (userAnswer === undefined || userAnswer === null || Array.isArray(userAnswer) && userAnswer.every((a)=>!a || a.toString().trim() === "")) {
                answersWithCorrectness.push({
                    questionIndex: index,
                    answer: "",
                    isCorrect: false
                });
                return;
            }
            // FIB: compare arrays, then store JSON string
            if (question.type === "FIB") {
                const correctAnswers = question.answers && question.answers.length > 0 ? question.answers : question.correctAnswer ? [
                    question.correctAnswer
                ] : [];
                if (!Array.isArray(userAnswer) || correctAnswers.length === 0) {
                    answersWithCorrectness.push({
                        questionIndex: index,
                        answer: Array.isArray(userAnswer) ? JSON.stringify(userAnswer) : userAnswer,
                        isCorrect: false
                    });
                    return;
                }
                const normalizedCorrect = correctAnswers.map((a)=>a?.toString().trim().toLowerCase());
                const normalizedUser = userAnswer.map((a)=>(a || "").toString().trim().toLowerCase());
                const allMatch = normalizedCorrect.every((ans, i)=>(normalizedUser[i] || "") === ans);
                if (allMatch) {
                    totalScore += question.points || 0;
                }
                answersWithCorrectness.push({
                    questionIndex: index,
                    answer: JSON.stringify(userAnswer),
                    isCorrect: allMatch
                });
                return;
            }
            // MCQ / TF (single string)
            const correctAnswer = question.correctAnswer?.toString().trim().toLowerCase();
            const providedAnswer = userAnswer.toString().trim().toLowerCase();
            const isCorrect = !!correctAnswer && correctAnswer === providedAnswer;
            if (isCorrect) {
                totalScore += question.points || 0;
            }
            answersWithCorrectness.push({
                questionIndex: index,
                answer: userAnswer,
                isCorrect
            });
        });
        return {
            score: totalScore,
            answers: answersWithCorrectness
        };
    };
    const handleSubmit = async ()=>{
        if (!currentUser) return;
        try {
            const { score: calculatedScore, answers } = calculateScore();
            setScore(calculatedScore);
            setIsSubmitted(true);
            if (currentAttempt) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAttempt"](currentAttempt._id, {
                    answers,
                    score: calculatedScore,
                    submittedAt: new Date(),
                    isSubmitted: true
                });
            } else {
                const countData = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttemptCount"](quizId, currentUser._id);
                const freshCount = Math.max(0, countData.count || 0);
                const totalPoints = quiz.questions.reduce((sum, q)=>sum + (q.points || 0), 0);
                await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAttempt"]({
                    quizId,
                    userId: currentUser._id,
                    courseId,
                    attemptNumber: freshCount + 1,
                    answers,
                    score: calculatedScore,
                    totalPoints,
                    submittedAt: new Date(),
                    isSubmitted: true
                });
            }
            await fetchAttemptData();
        } catch (error) {
            console.error("Error submitting quiz:", error);
            alert("Failed to submit quiz. Please try again.");
            setIsSubmitted(false);
        }
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
    const handleStartNewAttempt = async ()=>{
        if (!quizId || !currentUser) return;
        try {
            const countData = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Quizzes$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttemptCount"](quizId, currentUser._id);
            const freshAttemptCount = Math.max(0, countData.count || 0);
            const maxAttempts = quiz.multipleAttempts ? quiz.howManyAttempts || 1 : 1;
            if (freshAttemptCount >= maxAttempts) {
                alert("You have already used all available attempts for this quiz.");
                return;
            }
            setAttemptCount(freshAttemptCount);
            setViewingPreviousAttempt(false);
            setIsSubmitted(false);
            setSelectedAnswers({});
            setCurrentAttempt(null);
            setScore(0);
            setCurrentQuestionIndex(0);
        } catch (error) {
            console.error("Error starting new attempt:", error);
            alert("Failed to start new attempt. Please try again.");
        }
    };
    const isAnswerCorrect = (questionIndex)=>{
        const question = quiz.questions[questionIndex];
        const userAnswer = selectedAnswers[questionIndex];
        if (!question) return false;
        if (question.type === "FIB") {
            const correctAnswers = question.answers && question.answers.length > 0 ? question.answers : question.correctAnswer ? [
                question.correctAnswer
            ] : [];
            if (!Array.isArray(userAnswer) || correctAnswers.length === 0) return false;
            const normalizedCorrect = correctAnswers.map((a)=>a?.toString().trim().toLowerCase());
            const normalizedUser = userAnswer.map((a)=>(a || "").toString().trim().toLowerCase());
            return normalizedCorrect.every((ans, i)=>(normalizedUser[i] || "") === ans);
        }
        if (!userAnswer || !question.correctAnswer) return false;
        const correctAnswer = question.correctAnswer.toString().trim().toLowerCase();
        const providedAnswer = userAnswer.toString().trim().toLowerCase();
        return correctAnswer === providedAnswer;
    };
    if (!currentUser) return null;
    if ([
        "FACULTY",
        "ADMIN"
    ].includes(currentUser.role)) {
        router.push(`/courses/${courseId}/quizzes/${quizId}/Preview`);
        return null;
    }
    const totalPoints = quiz.questions.reduce((sum, q)=>sum + (q.points || 0), 0);
    const canTakeQuiz = !quiz.multipleAttempts || attemptCount < (quiz.howManyAttempts || 1);
    const attemptsRemaining = Math.max(0, quiz.multipleAttempts ? (quiz.howManyAttempts || 1) - attemptCount : 1 - attemptCount);
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
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 468,
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
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "secondary",
                            onClick: handleBack,
                            children: "Back to Details"
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            viewingPreviousAttempt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                variant: "info",
                className: "mb-3",
                children: [
                    "ⓘ You are viewing your previous attempt (Attempt #",
                    latestAttempt?.attemptNumber,
                    ")",
                    canTakeQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "primary",
                            size: "sm",
                            onClick: handleStartNewAttempt,
                            children: [
                                "Start New Attempt (",
                                attemptsRemaining,
                                " remaining)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 496,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 495,
                        columnNumber: 13
                    }, this),
                    !canTakeQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-muted",
                        children: "You have used all available attempts for this quiz."
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 506,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this),
            !viewingPreviousAttempt && !isSubmitted && !canTakeQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                variant: "danger",
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "⚠️ No Attempts Remaining"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 516,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-0 mt-2",
                        children: [
                            "You have used all ",
                            quiz.multipleAttempts ? quiz.howManyAttempts : 1,
                            " ",
                            "available attempts for this quiz."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "secondary",
                            onClick: handleBack,
                            children: "Back to Quiz Details"
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 515,
                columnNumber: 9
            }, this),
            !viewingPreviousAttempt && !isSubmitted && canTakeQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        variant: "info",
                        className: "mb-3",
                        children: [
                            "ⓘ Attempt #",
                            attemptCount + 1,
                            " of",
                            " ",
                            quiz.multipleAttempts ? quiz.howManyAttempts : 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this),
                            quiz.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: quiz.description
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 547,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "Quiz Instructions"
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 537,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            quiz.questions.length === 0 && (canTakeQuiz || viewingPreviousAttempt || isSubmitted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "text-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted",
                        children: "This quiz has no questions yet."
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 559,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                    lineNumber: 558,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 557,
                columnNumber: 11
            }, this),
            quiz.questions.length > 0 && (canTakeQuiz || viewingPreviousAttempt || isSubmitted) && (()=>{
                const qIndex = currentQuestionIndex;
                const question = quiz.questions[qIndex];
                const correct = isSubmitted && isAnswerCorrect(qIndex);
                const incorrect = isSubmitted && selectedAnswers[qIndex] && !correct;
                const isFillInBlank = question.type === "FIB";
                const isTrueFalse = question.type === "TF";
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "Question ",
                                            qIndex + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                    lineNumber: 606,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted",
                                    children: [
                                        question.points,
                                        " pts"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 605,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3",
                                    children: question.questionText
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                                    children: !isFillInBlank && !isTrueFalse && question.choices && question.choices.length > 0 ? // MCQ
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: question.choices.map((choice, cIndex)=>{
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
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 37
                                                        }, void 0),
                                                        isSubmitted && isSelected && !isCorrectChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ms-2 text-danger fw-bold",
                                                            children: "Your answer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 39
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 33
                                                }, void 0),
                                                value: choice,
                                                checked: isSelected,
                                                onChange: (e)=>handleAnswerChange(qIndex, e.target.value),
                                                className: `mb-2 ${isSubmitted && isCorrectChoice ? "text-success fw-bold" : ""}`,
                                                disabled: isSubmitted || viewingPreviousAttempt
                                            }, cIndex, false, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 29
                                            }, this);
                                        })
                                    }, void 0, false) : isTrueFalse ? // TRUE/FALSE
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
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
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 35
                                                        }, void 0),
                                                        isSubmitted && isSelected && !isCorrectChoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ms-2 text-danger fw-bold",
                                                            children: "Your answer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 37
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 31
                                                }, void 0),
                                                value: choice,
                                                checked: isSelected,
                                                onChange: (e)=>handleAnswerChange(qIndex, e.target.value),
                                                className: `mb-2 ${isSubmitted && isCorrectChoice ? "text-success fw-bold" : ""}`,
                                                disabled: isSubmitted || viewingPreviousAttempt
                                            }, cIndex, false, {
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 27
                                            }, this);
                                        })
                                    }, void 0, false) : // FIB: multiple blanks
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
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                                                            type: "text",
                                                            placeholder: "Enter your answer",
                                                            value: userText,
                                                            onChange: (e)=>handleFibAnswerChange(qIndex, blankIndex, e.target.value, fibBlanksCount),
                                                            disabled: isSubmitted || viewingPreviousAttempt,
                                                            className: isSubmitted ? thisBlankCorrect ? "border-success" : "border-danger" : ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, blankIndex, true, {
                                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                    lineNumber: 730,
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
                                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                        lineNumber: 718,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 611,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                    lineNumber: 593,
                    columnNumber: 13
                }, this);
            })(),
            quiz.questions.length > 0 && quiz.oneQuestionAtATime && (canTakeQuiz || viewingPreviousAttempt || isSubmitted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-between align-items-center mb-4",
                children: [
                    currentQuestionIndex > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "secondary",
                        onClick: handlePreviousQuestion,
                        children: "‹ Previous"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 778,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 782,
                        columnNumber: 15
                    }, this),
                    currentQuestionIndex < quiz.questions.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "secondary",
                        onClick: handleNextQuestion,
                        children: "Next ›"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 785,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 776,
                columnNumber: 11
            }, this),
            !isSubmitted && !viewingPreviousAttempt && canTakeQuiz && quiz.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "mt-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                    className: "d-flex justify-content-end align-items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted",
                            children: lastSavedTime && `Quiz saved at ${lastSavedTime}`
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 799,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "danger",
                            onClick: handleSubmit,
                            children: "Submit Quiz"
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 802,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                    lineNumber: 798,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 797,
                columnNumber: 11
            }, this),
            quiz.questions.length > 0 && (canTakeQuiz || viewingPreviousAttempt || isSubmitted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "mb-3",
                        children: "Questions"
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 813,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex flex-column gap-2 ms-3",
                        children: quiz.questions.map((_, idx)=>{
                            const isCurrent = idx === currentQuestionIndex;
                            const answered = selectedAnswers[idx] !== undefined;
                            const correct = isSubmitted && isAnswerCorrect(idx);
                            const incorrect = isSubmitted && answered && !correct;
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
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 822,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                        lineNumber: 814,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 812,
                columnNumber: 11
            }, this),
            isSubmitted && !viewingPreviousAttempt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
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
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 848,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: [
                                "Your score:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        score,
                                        " / ",
                                        totalPoints
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                    lineNumber: 857,
                                    columnNumber: 15
                                }, this),
                                " ",
                                "points"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 855,
                            columnNumber: 13
                        }, this),
                        canTakeQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "primary",
                                onClick: handleStartNewAttempt,
                                className: "me-2",
                                children: [
                                    "Take Quiz Again (",
                                    attemptsRemaining,
                                    " attempts remaining)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 864,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 863,
                            columnNumber: 15
                        }, this),
                        !canTakeQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                            variant: "warning",
                            className: "mt-3",
                            children: "You have used all available attempts for this quiz."
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 874,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "secondary",
                                onClick: handleBack,
                                children: "Back to Quiz Details"
                            }, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                                lineNumber: 879,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                    lineNumber: 847,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
                lineNumber: 846,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(kambaz)/Quizzes/[qid]/start/page.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
_s(StudentQuizTaking, "TLvhNumHx29PYAGhFZULPZKZeeE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = StudentQuizTaking;
var _c;
__turbopack_context__.k.register(_c, "StudentQuizTaking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=kambaz-next-js_app_%28kambaz%29_Quizzes_8353ad01._.js.map
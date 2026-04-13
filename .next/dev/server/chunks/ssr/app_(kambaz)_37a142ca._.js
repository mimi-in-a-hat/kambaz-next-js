module.exports = [
"[project]/app/(kambaz)/database/courses.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"RS101","name":"Rocket Propulsion","number":"RS4550","startDate":"2023-01-10","endDate":"2023-05-15","department":"D123","credits":4,"description":"This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work"},{"_id":"RS102","name":"Aerodynamics","number":"RS4560","startDate":"2023-01-10","endDate":"2023-05-15","department":"D123","credits":3,"description":"This course offers a comprehensive exploration of aerodynamics, focusing on the principles and applications of airflow and its effects on flying objects. Topics include fluid dynamics, airfoil design, lift and drag forces, and the aerodynamic considerations in aircraft design. The course blends theoretical learning with practical applications, suitable for students pursuing a career in aeronautics or astronautics engineering."},{"_id":"RS103","name":"Spacecraft Design","number":"RS4570","startDate":"2023-01-10","endDate":"2023-05-15","department":"D123","credits":4,"description":"This course delves into the principles and practices of spacecraft design, offering students a detailed understanding of the engineering and technology behind spacecraft systems. Key topics include spacecraft structure, propulsion, power systems, thermal control, and payload integration. Emphasizing both theoretical concepts and practical skills, the course prepares students for careers in the space industry, with a focus on innovative design and problem-solving in the context of current and future space missions"},{"_id":"RS104","name":"Organic Chemistry","number":"CH1230","startDate":"2023-01-10","endDate":"2023-05-15","department":"D134","credits":3,"description":"Organic Chemistry is an in-depth course that explores the structure, properties, composition, and reactions of organic compounds and materials. The course covers various topics including hydrocarbons, functional groups, stereochemistry, and organic synthesis techniques. Students will learn about the mechanisms of organic reactions, spectroscopic methods for structure determination, and the role of organic chemistry in biological systems. Emphasis is placed on problem-solving and laboratory skills, preparing students for advanced studies in chemistry, medicine, and related fields."},{"_id":"RS105","name":"Inorganic Chemistry","number":"CH1240","startDate":"2023-01-10","endDate":"2023-05-15","department":"D134","credits":3,"description":"Inorganic Chemistry focuses on the properties, structures, and behaviors of inorganic and organometallic compounds. This course covers a range of topics including coordination chemistry, metal complexes, bonding theories, symmetry, and crystal field theory. Students will also explore the role of inorganic chemistry in real-world applications such as catalysis, materials science, and bioinorganic processes. Laboratory work emphasizes synthesis and analysis of inorganic compounds, fostering a deeper understanding of theoretical concepts."},{"_id":"RS106","name":"Physical Chemistry","number":"CH1250","startDate":"2023-01-10","endDate":"2023-05-15","department":"D134","credits":3,"description":"Physical Chemistry merges the principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and the chemical reactions they undergo. Key topics include thermodynamics, kinetics, quantum mechanics, and spectroscopy. The course provides a comprehensive understanding of molecular behavior, reaction dynamics, and the application of mathematical methods in solving chemical problems. Labs focus on experimental techniques and data analysis, equipping students with skills necessary for research and advanced study in chemistry and related fields."},{"_id":"RS107","name":"Ancient Languages and Scripts of Middle-earth","number":"ME101","startDate":"2023-01-10","endDate":"2023-05-15","department":"Languages","credits":3,"description":"This course offers an exploration of the ancient languages and scripts found throughout Middle-earth, including Elvish (Sindarin and Quenya), Dwarvish (Khuzdul), and the Black Speech of Mordor. Students will learn the historical and cultural contexts of these languages, their linguistic structures, and their usage in various inscriptions and texts. Emphasis is on understanding the philological aspects and the role of language in shaping Middle-earth's history and lore.","author":"654f9ec2ea7ead465908d1e3"},{"_id":"RS108","name":"Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth","number":"ME102","startDate":"2023-01-10","endDate":"2023-05-15","department":"Political Studies","credits":4,"description":"This course explores the complex relationships and diplomatic interactions among the different races of Middle-earth: Elves, Men, Dwarves, and Wizards. Topics include the study of historical alliances, conflicts, and the role of leadership and wisdom in maintaining peace. Students will engage in discussions and case studies on key events in Middle-earth's history, such as the Council of Elrond and the War of the Ring, to understand the principles of diplomacy and conflict resolution in a multi-species context.","author":"654f9ec2ea7ead465908d1e3"}]);}),
"[project]/app/(kambaz)/database/modules.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"M101","name":"Introduction to Rocket Propulsion","description":"Basic principles of rocket propulsion and rocket engines.","course":"RS101","lessons":[{"_id":"L101","name":"History of Rocketry","description":"A brief history of rocketry and space exploration.","module":"M101"},{"_id":"L102","name":"Rocket Propulsion Fundamentals","description":"Basic principles of rocket propulsion.","module":"M101"},{"_id":"L103","name":"Rocket Engine Types","description":"Overview of different types of rocket engines.","module":"M101"}]},{"_id":"M102","name":"Fuel and Combustion","description":"Understanding rocket fuel, combustion processes, and efficiency.","course":"RS101","lessons":[{"_id":"L201","name":"Rocket Fuel","description":"Overview of different types of rocket fuels.","module":"M102"},{"_id":"L202","name":"Combustion Processes","description":"Understanding combustion processes and efficiency.","module":"M102"},{"_id":"L203","name":"Combustion Instability","description":"Understanding combustion instability and mitigation.","module":"M102"}]},{"_id":"M103","name":"Nozzle Design","description":"Principles of rocket nozzle design and performance optimization.","course":"RS101","lessons":[{"_id":"L301","name":"Nozzle Design","description":"Overview of different types of rocket nozzles.","module":"M103"},{"_id":"L302","name":"Nozzle Performance","description":"Understanding nozzle performance and efficiency.","module":"M103"},{"_id":"L303","name":"Nozzle Optimization","description":"Optimizing nozzle design for specific applications.","module":"M103"}]},{"_id":"M201","name":"Fundamentals of Aerodynamics","description":"Basic aerodynamic concepts and fluid dynamics principles.","course":"RS102"},{"_id":"M202","name":"Subsonic and Supersonic Flow","description":"Understanding subsonic and supersonic aerodynamic behaviors.","course":"RS102"},{"_id":"M203","name":"Aerodynamic Heating","description":"Study of aerodynamic heating and thermal protection systems.","course":"RS102"},{"_id":"M301","name":"Spacecraft Structural Design","description":"Fundamentals of designing spacecraft structures and materials selection.","course":"RS103"},{"_id":"M302","name":"Orbital Mechanics","description":"Understanding orbital dynamics and mission planning.","course":"RS103"},{"_id":"M303","name":"Spacecraft Systems Engineering","description":"Overview of spacecraft systems and subsystems engineering.","course":"RS103"}]);}),
"[project]/app/(kambaz)/database/assignments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"A101","title":"HTML Basics","course":"RS101","description":"Introduction to HTML tags, structure, and basic elements. Create a simple web page with proper HTML structure including headings, paragraphs, and links.","dueDate":"2025-01-25","availableDate":"2025-01-05","points":100},{"_id":"A102","title":"CSS Styling","course":"RS101","description":"Learn CSS selectors, properties, and how to style HTML elements. Create a styled webpage with custom colors, fonts, and layouts.","dueDate":"2025-02-08","availableDate":"2025-01-26","points":100},{"_id":"A103","title":"JavaScript Functions","course":"RS101","description":"Write JavaScript functions to perform various calculations and manipulations. Include arrow functions, callbacks, and closures.","dueDate":"2025-02-22","availableDate":"2025-02-09","points":150},{"_id":"A104","title":"React Components","course":"RS101","description":"Build functional React components with hooks. Implement state management and component composition.","dueDate":"2025-03-08","availableDate":"2025-02-23","points":200},{"_id":"A201","title":"Aerodynamics Lab Report","course":"RS102","description":"Conduct experiments on airflow and write a comprehensive lab report including hypothesis, methodology, results, and analysis.","dueDate":"2025-02-01","availableDate":"2025-01-10","points":150},{"_id":"A202","title":"Lift and Drag Calculation","course":"RS102","description":"Calculate lift and drag forces using aerodynamic equations. Submit calculations with diagrams and explanations.","dueDate":"2025-02-15","availableDate":"2025-02-02","points":100},{"_id":"A203","title":"Airfoil Design Project","course":"RS102","description":"Design an optimal airfoil for a specific application using CAD software. Include performance analysis and comparison with existing designs.","dueDate":"2025-03-15","availableDate":"2025-02-16","points":200},{"_id":"A301","title":"Spacecraft Systems Design","course":"RS103","description":"Design a complete spacecraft system including structure, propulsion, power, and thermal control. Submit detailed design document.","dueDate":"2025-02-10","availableDate":"2025-01-15","points":250},{"_id":"A302","title":"Structural Analysis Report","course":"RS103","description":"Analyze spacecraft structural integrity under various stress conditions. Include finite element analysis results and recommendations.","dueDate":"2025-02-28","availableDate":"2025-02-11","points":150},{"_id":"A303","title":"Mission Planning Document","course":"RS103","description":"Create a detailed mission plan for a spacecraft including trajectory analysis, resource allocation, and contingency planning.","dueDate":"2025-03-20","availableDate":"2025-02-01","points":200},{"_id":"A401","title":"Organic Synthesis Problem Set","course":"RS104","description":"Solve complex multi-step synthesis problems. Show reaction mechanisms, predict products, and explain your reasoning.","dueDate":"2025-01-31","availableDate":"2025-01-10","points":100},{"_id":"A402","title":"Spectroscopy Analysis","course":"RS104","description":"Interpret NMR, IR, and mass spectrometry data to determine unknown organic compound structures.","dueDate":"2025-02-14","availableDate":"2025-02-01","points":120},{"_id":"A403","title":"Laboratory Experiment Report","course":"RS104","description":"Document your organic chemistry lab experiment including procedure, observations, results, and analysis of products.","dueDate":"2025-03-01","availableDate":"2025-02-15","points":150},{"_id":"A501","title":"Coordination Chemistry Problems","course":"RS105","description":"Solve problems related to coordination complexes, ligand field theory, and metal-ligand interactions.","dueDate":"2025-01-29","availableDate":"2025-01-10","points":100},{"_id":"A502","title":"Crystal Structure Analysis","course":"RS105","description":"Analyze crystal structures using diffraction data. Identify lattice parameters, space groups, and structural properties.","dueDate":"2025-02-12","availableDate":"2025-02-01","points":130},{"_id":"A503","title":"Inorganic Synthesis Lab","course":"RS105","description":"Synthesize and characterize an inorganic compound. Document procedure, characterization results, and theoretical yield calculations.","dueDate":"2025-02-26","availableDate":"2025-02-13","points":150}]);}),
"[project]/app/(kambaz)/database/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/database/courses.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/database/modules.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$assignments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/database/assignments.json (json)");
;
;
;
;
}),
"[project]/app/(kambaz)/database/modules.json (json) <export default as modules>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modules",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/database/modules.json (json)");
}),
"[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GreenCheckmark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
function GreenCheckmark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "me-1 position-relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                style: {
                    top: "2px"
                },
                className: "text-success me-1 position-absolute fs-5"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCircle"], {
                className: "text-white me-1 fs-6"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModulesControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-ssr] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownItem$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/DropdownItem.js [app-ssr] (ecmascript) <export default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownMenu$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/DropdownMenu.js [app-ssr] (ecmascript) <export default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownToggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownToggle$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/DropdownToggle.js [app-ssr] (ecmascript) <export default as DropdownToggle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ModulesControls() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-modules-controls",
        className: "text-nowrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "danger",
                size: "lg",
                className: "me-1 float-end",
                id: "wd-add-module-btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlus"], {
                        className: "position-relative me-2",
                        style: {
                            bottom: "1px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    "Module"
                ]
            }, void 0, true, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                className: "float-end me-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownToggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownToggle$3e$__["DropdownToggle"], {
                        variant: "secondary",
                        size: "lg",
                        id: "wd-publish-all-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            " Publish All"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownMenu$3e$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownItem$3e$__["DropdownItem"], {
                                id: "wd-publish-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    " Publish All"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownItem$3e$__["DropdownItem"], {
                                id: "wd-publish-all-modules-and-items",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    " Publish all modules and items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownItem$3e$__["DropdownItem"], {
                                id: "wd-publish-modules-only",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    " Publish modules only"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownItem$3e$__["DropdownItem"], {
                                id: "wd-unpublish-all-modules-and-items",
                                children: "Unpublish all modules and items"
                            }, void 0, false, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$DropdownItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DropdownItem$3e$__["DropdownItem"], {
                                id: "wd-unpublish-modules-only",
                                children: "Unpublish modules only"
                            }, void 0, false, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "secondary",
                size: "lg",
                className: "me-2 float-end",
                id: "wd-view-progress",
                children: "View Progress"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "secondary",
                size: "lg",
                className: "me-2 float-end",
                id: "wd-collapse-all",
                children: "Collapse All"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(kambaz)/courses/[cid]/modules/ModuleControlButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleControlButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ModuleControlButtons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "float-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModuleControlButtons.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsPlus"], {
                className: "fs-4 me-2"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModuleControlButtons.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoEllipsisVertical"], {
                className: "fs-4"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModuleControlButtons.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/ModuleControlButtons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(kambaz)/courses/[cid]/modules/LessonControlButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LessonControlButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/courses/[cid]/modules/GreenCheckmark.tsx [app-ssr] (ecmascript)");
;
;
;
function LessonControlButtons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "float-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$GreenCheckmark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/LessonControlButtons.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoEllipsisVertical"], {
                className: "fs-4"
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/LessonControlButtons.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/LessonControlButtons.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(kambaz)/courses/[cid]/modules/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/(kambaz)/database/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__$3c$export__default__as__modules$3e$__ = __turbopack_context__.i("[project]/app/(kambaz)/database/modules.json (json) <export default as modules>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroupItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$ModulesControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/courses/[cid]/modules/ModulesControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$ModuleControlButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/courses/[cid]/modules/ModuleControlButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$LessonControlButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(kambaz)/courses/[cid]/modules/LessonControlButtons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Modules() {
    const { cid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const courseModules = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__$3c$export__default__as__modules$3e$__["modules"].filter((module)=>module.course === cid);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$ModulesControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                lineNumber: 19,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                lineNumber: 19,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "rounded-0",
                id: "wd-modules",
                children: courseModules.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "wd-module p-0 mb-5 fs-5 border-gray",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wd-title p-3 ps-2 bg-secondary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsGripVertical"], {
                                        className: "me-2 fs-3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    module.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$ModuleControlButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "wd-lessons rounded-0",
                                children: module.lessons && module.lessons.map((lesson)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "wd-lesson p-3 ps-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsGripVertical"], {
                                                className: "me-2 fs-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this),
                                            lesson.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$LessonControlButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, lesson._id, true, {
                                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, module._id, true, {
                        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(kambaz)/courses/[cid]/modules/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28kambaz%29_37a142ca._.js.map
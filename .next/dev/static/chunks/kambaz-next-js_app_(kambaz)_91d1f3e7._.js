(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KambazNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-icons/lia/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>");
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
;
function KambazNavigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineDashboard"]
        },
        {
            label: "Courses",
            path: "/courses",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiaBookSolid"]
        },
        {
            label: "Calendar",
            path: "/calendar",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCalendarOutline"]
        },
        {
            label: "Inbox",
            path: "/inbox",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInbox"]
        },
        {
            label: "Labs",
            path: "/labs",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiaCogSolid"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
        id: "wd-kambaz-navigation",
        style: {
            width: 120
        },
        className: "rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                id: "wd-neu-link",
                target: "_blank",
                href: "https://www.northeastern.edu/",
                action: true,
                className: "bg-black border-0 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/northeastern.png",
                    width: "75px"
                }, void 0, false, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                as: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                href: "/account",
                className: `text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegCircleUser"], {
                        className: `fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`
                    }, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    "Account"
                ]
            }, void 0, true, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    href: link.path,
                    className: `bg-black text-center border-0
            ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`,
                    children: [
                        link.icon({
                            className: "fs-1 text-danger"
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        link.label
                    ]
                }, link.path, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(KambazNavigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = KambazNavigation;
var _c;
__turbopack_context__.k.register(_c, "KambazNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/database/courses.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"RS101","name":"Rocket Propulsion","number":"RS4550","startDate":"2023-01-10","endDate":"2023-05-15","department":"D123","credits":4,"description":"This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work"},{"_id":"RS102","name":"Aerodynamics","number":"RS4560","startDate":"2023-01-10","endDate":"2023-05-15","department":"D123","credits":3,"description":"This course offers a comprehensive exploration of aerodynamics, focusing on the principles and applications of airflow and its effects on flying objects. Topics include fluid dynamics, airfoil design, lift and drag forces, and the aerodynamic considerations in aircraft design. The course blends theoretical learning with practical applications, suitable for students pursuing a career in aeronautics or astronautics engineering."},{"_id":"RS103","name":"Spacecraft Design","number":"RS4570","startDate":"2023-01-10","endDate":"2023-05-15","department":"D123","credits":4,"description":"This course delves into the principles and practices of spacecraft design, offering students a detailed understanding of the engineering and technology behind spacecraft systems. Key topics include spacecraft structure, propulsion, power systems, thermal control, and payload integration. Emphasizing both theoretical concepts and practical skills, the course prepares students for careers in the space industry, with a focus on innovative design and problem-solving in the context of current and future space missions"},{"_id":"RS104","name":"Organic Chemistry","number":"CH1230","startDate":"2023-01-10","endDate":"2023-05-15","department":"D134","credits":3,"description":"Organic Chemistry is an in-depth course that explores the structure, properties, composition, and reactions of organic compounds and materials. The course covers various topics including hydrocarbons, functional groups, stereochemistry, and organic synthesis techniques. Students will learn about the mechanisms of organic reactions, spectroscopic methods for structure determination, and the role of organic chemistry in biological systems. Emphasis is placed on problem-solving and laboratory skills, preparing students for advanced studies in chemistry, medicine, and related fields."},{"_id":"RS105","name":"Inorganic Chemistry","number":"CH1240","startDate":"2023-01-10","endDate":"2023-05-15","department":"D134","credits":3,"description":"Inorganic Chemistry focuses on the properties, structures, and behaviors of inorganic and organometallic compounds. This course covers a range of topics including coordination chemistry, metal complexes, bonding theories, symmetry, and crystal field theory. Students will also explore the role of inorganic chemistry in real-world applications such as catalysis, materials science, and bioinorganic processes. Laboratory work emphasizes synthesis and analysis of inorganic compounds, fostering a deeper understanding of theoretical concepts."},{"_id":"RS106","name":"Physical Chemistry","number":"CH1250","startDate":"2023-01-10","endDate":"2023-05-15","department":"D134","credits":3,"description":"Physical Chemistry merges the principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and the chemical reactions they undergo. Key topics include thermodynamics, kinetics, quantum mechanics, and spectroscopy. The course provides a comprehensive understanding of molecular behavior, reaction dynamics, and the application of mathematical methods in solving chemical problems. Labs focus on experimental techniques and data analysis, equipping students with skills necessary for research and advanced study in chemistry and related fields."},{"_id":"RS107","name":"Ancient Languages and Scripts of Middle-earth","number":"ME101","startDate":"2023-01-10","endDate":"2023-05-15","department":"Languages","credits":3,"description":"This course offers an exploration of the ancient languages and scripts found throughout Middle-earth, including Elvish (Sindarin and Quenya), Dwarvish (Khuzdul), and the Black Speech of Mordor. Students will learn the historical and cultural contexts of these languages, their linguistic structures, and their usage in various inscriptions and texts. Emphasis is on understanding the philological aspects and the role of language in shaping Middle-earth's history and lore.","author":"654f9ec2ea7ead465908d1e3"},{"_id":"RS108","name":"Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth","number":"ME102","startDate":"2023-01-10","endDate":"2023-05-15","department":"Political Studies","credits":4,"description":"This course explores the complex relationships and diplomatic interactions among the different races of Middle-earth: Elves, Men, Dwarves, and Wizards. Topics include the study of historical alliances, conflicts, and the role of leadership and wisdom in maintaining peace. Students will engage in discussions and case studies on key events in Middle-earth's history, such as the Council of Elrond and the War of the Ring, to understand the principles of diplomacy and conflict resolution in a multi-species context.","author":"654f9ec2ea7ead465908d1e3"}]);}),
"[project]/kambaz-next-js/app/(kambaz)/database/modules.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"M101","name":"Introduction to Rocket Propulsion","description":"Basic principles of rocket propulsion and rocket engines.","course":"RS101","lessons":[{"_id":"L101","name":"History of Rocketry","description":"A brief history of rocketry and space exploration.","module":"M101"},{"_id":"L102","name":"Rocket Propulsion Fundamentals","description":"Basic principles of rocket propulsion.","module":"M101"},{"_id":"L103","name":"Rocket Engine Types","description":"Overview of different types of rocket engines.","module":"M101"}]},{"_id":"M102","name":"Fuel and Combustion","description":"Understanding rocket fuel, combustion processes, and efficiency.","course":"RS101","lessons":[{"_id":"L201","name":"Rocket Fuel","description":"Overview of different types of rocket fuels.","module":"M102"},{"_id":"L202","name":"Combustion Processes","description":"Understanding combustion processes and efficiency.","module":"M102"},{"_id":"L203","name":"Combustion Instability","description":"Understanding combustion instability and mitigation.","module":"M102"}]},{"_id":"M103","name":"Nozzle Design","description":"Principles of rocket nozzle design and performance optimization.","course":"RS101","lessons":[{"_id":"L301","name":"Nozzle Design","description":"Overview of different types of rocket nozzles.","module":"M103"},{"_id":"L302","name":"Nozzle Performance","description":"Understanding nozzle performance and efficiency.","module":"M103"},{"_id":"L303","name":"Nozzle Optimization","description":"Optimizing nozzle design for specific applications.","module":"M103"}]},{"_id":"M201","name":"Fundamentals of Aerodynamics","description":"Basic aerodynamic concepts and fluid dynamics principles.","course":"RS102"},{"_id":"M202","name":"Subsonic and Supersonic Flow","description":"Understanding subsonic and supersonic aerodynamic behaviors.","course":"RS102"},{"_id":"M203","name":"Aerodynamic Heating","description":"Study of aerodynamic heating and thermal protection systems.","course":"RS102"},{"_id":"M301","name":"Spacecraft Structural Design","description":"Fundamentals of designing spacecraft structures and materials selection.","course":"RS103"},{"_id":"M302","name":"Orbital Mechanics","description":"Understanding orbital dynamics and mission planning.","course":"RS103"},{"_id":"M303","name":"Spacecraft Systems Engineering","description":"Overview of spacecraft systems and subsystems engineering.","course":"RS103"}]);}),
"[project]/kambaz-next-js/app/(kambaz)/database/assignments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"A101","title":"HTML Basics","course":"RS101","description":"Introduction to HTML tags, structure, and basic elements. Create a simple web page with proper HTML structure including headings, paragraphs, and links.","dueDate":"2025-01-25","availableDate":"2025-01-05","points":100},{"_id":"A102","title":"CSS Styling","course":"RS101","description":"Learn CSS selectors, properties, and how to style HTML elements. Create a styled webpage with custom colors, fonts, and layouts.","dueDate":"2025-02-08","availableDate":"2025-01-26","points":100},{"_id":"A103","title":"JavaScript Functions","course":"RS101","description":"Write JavaScript functions to perform various calculations and manipulations. Include arrow functions, callbacks, and closures.","dueDate":"2025-02-22","availableDate":"2025-02-09","points":150},{"_id":"A104","title":"React Components","course":"RS101","description":"Build functional React components with hooks. Implement state management and component composition.","dueDate":"2025-03-08","availableDate":"2025-02-23","points":200},{"_id":"A201","title":"Aerodynamics Lab Report","course":"RS102","description":"Conduct experiments on airflow and write a comprehensive lab report including hypothesis, methodology, results, and analysis.","dueDate":"2025-02-01","availableDate":"2025-01-10","points":150},{"_id":"A202","title":"Lift and Drag Calculation","course":"RS102","description":"Calculate lift and drag forces using aerodynamic equations. Submit calculations with diagrams and explanations.","dueDate":"2025-02-15","availableDate":"2025-02-02","points":100},{"_id":"A203","title":"Airfoil Design Project","course":"RS102","description":"Design an optimal airfoil for a specific application using CAD software. Include performance analysis and comparison with existing designs.","dueDate":"2025-03-15","availableDate":"2025-02-16","points":200},{"_id":"A301","title":"Spacecraft Systems Design","course":"RS103","description":"Design a complete spacecraft system including structure, propulsion, power, and thermal control. Submit detailed design document.","dueDate":"2025-02-10","availableDate":"2025-01-15","points":250},{"_id":"A302","title":"Structural Analysis Report","course":"RS103","description":"Analyze spacecraft structural integrity under various stress conditions. Include finite element analysis results and recommendations.","dueDate":"2025-02-28","availableDate":"2025-02-11","points":150},{"_id":"A303","title":"Mission Planning Document","course":"RS103","description":"Create a detailed mission plan for a spacecraft including trajectory analysis, resource allocation, and contingency planning.","dueDate":"2025-03-20","availableDate":"2025-02-01","points":200},{"_id":"A401","title":"Organic Synthesis Problem Set","course":"RS104","description":"Solve complex multi-step synthesis problems. Show reaction mechanisms, predict products, and explain your reasoning.","dueDate":"2025-01-31","availableDate":"2025-01-10","points":100},{"_id":"A402","title":"Spectroscopy Analysis","course":"RS104","description":"Interpret NMR, IR, and mass spectrometry data to determine unknown organic compound structures.","dueDate":"2025-02-14","availableDate":"2025-02-01","points":120},{"_id":"A403","title":"Laboratory Experiment Report","course":"RS104","description":"Document your organic chemistry lab experiment including procedure, observations, results, and analysis of products.","dueDate":"2025-03-01","availableDate":"2025-02-15","points":150},{"_id":"A501","title":"Coordination Chemistry Problems","course":"RS105","description":"Solve problems related to coordination complexes, ligand field theory, and metal-ligand interactions.","dueDate":"2025-01-29","availableDate":"2025-01-10","points":100},{"_id":"A502","title":"Crystal Structure Analysis","course":"RS105","description":"Analyze crystal structures using diffraction data. Identify lattice parameters, space groups, and structural properties.","dueDate":"2025-02-12","availableDate":"2025-02-01","points":130},{"_id":"A503","title":"Inorganic Synthesis Lab","course":"RS105","description":"Synthesize and characterize an inorganic compound. Document procedure, characterization results, and theoretical yield calculations.","dueDate":"2025-02-26","availableDate":"2025-02-13","points":150}]);}),
"[project]/kambaz-next-js/app/(kambaz)/database/users.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"123","firstName":"Tony","lastName":"Stark","username":"tstark","password":"password123","loginId":"001234561S","section":"S101","role":"STUDENT","lastActivity":"2025-02-10","totalActivity":"10:21:32"},{"_id":"234","firstName":"Bruce","lastName":"Wayne","username":"bwayne","password":"password123","loginId":"001234562S","section":"S101","role":"STUDENT","lastActivity":"2025-02-09","totalActivity":"08:45:10"},{"_id":"345","firstName":"Steve","lastName":"Rogers","username":"srogers","password":"password123","loginId":"001234563S","section":"S101","role":"STUDENT","lastActivity":"2025-02-08","totalActivity":"12:02:44"},{"_id":"456","firstName":"Natasha","lastName":"Romanoff","username":"nromanoff","password":"password123","loginId":"001234564S","section":"S101","role":"STUDENT","lastActivity":"2025-02-07","totalActivity":"09:17:55"},{"_id":"567","firstName":"Thor","lastName":"Odinson","username":"thor","password":"password123","loginId":"001234565S","section":"S102","role":"STUDENT","lastActivity":"2025-02-06","totalActivity":"15:33:22"},{"_id":"789","firstName":"Peter","lastName":"Parker","username":"pparker","password":"password123","loginId":"001234566S","section":"S102","role":"STUDENT","lastActivity":"2025-02-05","totalActivity":"11:44:18"},{"_id":"890","firstName":"Black","lastName":"Panther","username":"bpanther","password":"password123","loginId":"001234567S","section":"S102","role":"STUDENT","lastActivity":"2025-02-04","totalActivity":"08:12:05"},{"_id":"901","firstName":"Stephen","lastName":"Strange","username":"sstrange","password":"password123","loginId":"001234568F","section":"S101","role":"FACULTY","lastActivity":"2025-02-11","totalActivity":"22:15:00"},{"_id":"912","firstName":"Wanda","lastName":"Maximoff","username":"wmaximoff","password":"password123","loginId":"001234569TA","section":"S101","role":"TEACHING ASSISTANT","lastActivity":"2025-02-10","totalActivity":"18:45:30"},{"_id":"1023","firstName":"Nick","lastName":"Fury","username":"nfury","password":"password123","loginId":"001234570F","section":"S102","role":"FACULTY","lastActivity":"2025-02-11","totalActivity":"20:30:15"}]);}),
"[project]/kambaz-next-js/app/(kambaz)/database/enrollments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"_id":"1","user":"123","course":"RS101"},{"_id":"2","user":"234","course":"RS101"},{"_id":"3","user":"345","course":"RS101"},{"_id":"4","user":"456","course":"RS101"},{"_id":"5","user":"567","course":"RS101"},{"_id":"6","user":"234","course":"RS102"},{"_id":"7","user":"789","course":"RS102"},{"_id":"8","user":"890","course":"RS102"},{"_id":"9","user":"123","course":"RS102"}]);}),
"[project]/kambaz-next-js/app/(kambaz)/database/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/courses.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/modules.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$assignments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/assignments.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$users$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/users.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$enrollments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/enrollments.json (json)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/database/courses.json (json) <export default as courses>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$courses$2e$json__$28$json$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/courses.json (json)");
}),
"[project]/kambaz-next-js/app/(kambaz)/courses/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addNewCourse",
    ()=>addNewCourse,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCourse",
    ()=>deleteCourse,
    "updateCourse",
    ()=>updateCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$courses$2e$json__$28$json$29$__$3c$export__default__as__courses$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/courses.json (json) <export default as courses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
const initialState = {
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$courses$2e$json__$28$json$29$__$3c$export__default__as__courses$3e$__["courses"]
};
const coursesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course })=>{
            const newCourse = {
                ...course,
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            };
            state.courses = [
                ...state.courses,
                newCourse
            ];
        },
        deleteCourse: (state, { payload: courseId })=>{
            state.courses = state.courses.filter((course)=>course._id !== courseId);
        },
        updateCourse: (state, { payload: course })=>{
            state.courses = state.courses.map((c)=>c._id === course._id ? course : c);
        },
        setCourses: (state, { payload: courses })=>{
            state.courses = courses;
        }
    }
});
const { addNewCourse, deleteCourse, updateCourse } = coursesSlice.actions;
const __TURBOPACK__default__export__ = coursesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/database/modules.json (json) <export default as modules>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modules",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/modules.json (json)");
}),
"[project]/kambaz-next-js/app/(kambaz)/courses/[cid]/modules/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addModule",
    ()=>addModule,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteModule",
    ()=>deleteModule,
    "editModule",
    ()=>editModule,
    "updateModule",
    ()=>updateModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__$3c$export__default__as__modules$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/modules.json (json) <export default as modules>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
const initialState = {
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$modules$2e$json__$28$json$29$__$3c$export__default__as__modules$3e$__["modules"]
};
const modulesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, { payload: module })=>{
            const newModule = {
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                lessons: [],
                name: module.name,
                course: module.course
            };
            state.modules = [
                ...state.modules,
                newModule
            ];
        },
        deleteModule: (state, { payload: moduleId })=>{
            state.modules = state.modules.filter((m)=>m._id !== moduleId);
        },
        updateModule: (state, { payload: module })=>{
            state.modules = state.modules.map((m)=>m._id === module._id ? module : m);
        },
        editModule: (state, { payload: moduleId })=>{
            state.modules = state.modules.map((m)=>m._id === moduleId ? {
                    ...m,
                    editing: true
                } : m);
        }
    }
});
const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
const __TURBOPACK__default__export__ = modulesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/account/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCurrentUser",
    ()=>setCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    currentUser: null
};
const accountSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action)=>{
            state.currentUser = action.payload;
        }
    }
});
const { setCurrentUser } = accountSlice.actions;
const __TURBOPACK__default__export__ = accountSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/database/assignments.json (json) <export default as assignments>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignments",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$assignments$2e$json__$28$json$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$assignments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/assignments.json (json)");
}),
"[project]/kambaz-next-js/app/(kambaz)/courses/[cid]/assignments/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAssignment",
    ()=>addAssignment,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteAssignment",
    ()=>deleteAssignment,
    "setAssignments",
    ()=>setAssignments,
    "updateAssignment",
    ()=>updateAssignment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$assignments$2e$json__$28$json$29$__$3c$export__default__as__assignments$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/assignments.json (json) <export default as assignments>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
const initialState = {
    assignments: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$assignments$2e$json__$28$json$29$__$3c$export__default__as__assignments$3e$__["assignments"]
};
const assignmentsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment })=>{
            const newAssignment = {
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                dueDate: assignment.dueDate,
                availableDate: assignment.availableDate,
                availableUntilDate: assignment.availableUntilDate,
                points: assignment.points
            };
            state.assignments = [
                ...state.assignments,
                newAssignment
            ];
        },
        deleteAssignment: (state, { payload: assignmentId })=>{
            state.assignments = state.assignments.filter((a)=>a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment })=>{
            state.assignments = state.assignments.map((a)=>a._id === assignment._id ? assignment : a);
        },
        setAssignments: (state, { payload: assignments })=>{
            state.assignments = assignments;
        }
    }
});
const { addAssignment, deleteAssignment, updateAssignment, setAssignments } = assignmentsSlice.actions;
const __TURBOPACK__default__export__ = assignmentsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/database/enrollments.json (json) <export default as enrollments>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enrollments",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$enrollments$2e$json__$28$json$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$enrollments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/enrollments.json (json)");
}),
"[project]/kambaz-next-js/app/(kambaz)/enrollments/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enrollUser",
    ()=>enrollUser,
    "setEnrollments",
    ()=>setEnrollments,
    "unenrollUser",
    ()=>unenrollUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$enrollments$2e$json__$28$json$29$__$3c$export__default__as__enrollments$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/database/enrollments.json (json) <export default as enrollments>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
const initialState = {
    enrollments: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$database$2f$enrollments$2e$json__$28$json$29$__$3c$export__default__as__enrollments$3e$__["enrollments"]
};
const enrollmentsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "enrollments",
    initialState,
    reducers: {
        enrollUser: (state, { payload: { userId, courseId } })=>{
            const newEnrollment = {
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                user: userId,
                course: courseId
            };
            state.enrollments = [
                ...state.enrollments,
                newEnrollment
            ];
        },
        unenrollUser: (state, { payload: { userId, courseId } })=>{
            state.enrollments = state.enrollments.filter((e)=>!(e.user === userId && e.course === courseId));
        },
        setEnrollments: (state, { payload: enrollments })=>{
            state.enrollments = enrollments;
        }
    }
});
const { enrollUser, unenrollUser, setEnrollments } = enrollmentsSlice.actions;
const __TURBOPACK__default__export__ = enrollmentsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$courses$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/courses/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/courses/[cid]/modules/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/account/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$assignments$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/courses/[cid]/assignments/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$enrollments$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/enrollments/reducer.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        coursesReducer: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$courses$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        modulesReducer: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$modules$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        accountReducer: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        assignmentsReducer: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$courses$2f5b$cid$5d2f$assignments$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        enrollmentsReducer: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$enrollments$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTP_SERVER",
    ()=>HTTP_SERVER,
    "USERS_API",
    ()=>USERS_API,
    "profile",
    ()=>profile,
    "signin",
    ()=>signin,
    "signout",
    ()=>signout,
    "signup",
    ()=>signup,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const USERS_API = `${HTTP_SERVER}/api/users`;
const signin = async (credentials)=>{
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
};
const profile = async ()=>{
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};
const signup = async (user)=>{
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
};
const signout = async ()=>{
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};
const updateUser = async (user)=>{
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/Session.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Session
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/account/reducer.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Session() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Session.useEffect": ()=>{
            const fetchCurrentUser = {
                "Session.useEffect.fetchCurrentUser": async ()=>{
                    try {
                        const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"]();
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUser"])(currentUser));
                    } catch  {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUser"])(null));
                    }
                }
            }["Session.useEffect.fetchCurrentUser"];
            fetchCurrentUser();
        }
    }["Session.useEffect"], [
        dispatch
    ]);
    return null;
}
_s(Session, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Session;
var _c;
__turbopack_context__.k.register(_c, "Session");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/kambaz-next-js/app/(kambaz)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KambazLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Session$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/kambaz-next-js/app/(kambaz)/Session.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function KambazLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Session$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "wd-kambaz",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$app$2f28$kambaz$292f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
                                lineNumber: 16,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
                            lineNumber: 15,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-fill",
                            style: {
                                marginLeft: "120px"
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
                            lineNumber: 18,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
                    lineNumber: 14,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/kambaz-next-js/app/(kambaz)/layout.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
}
_c = KambazLayout;
var _c;
__turbopack_context__.k.register(_c, "KambazLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=kambaz-next-js_app_%28kambaz%29_91d1f3e7._.js.map
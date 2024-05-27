// RBAC.js
export const navLinks = [
    {name: "Homepage", link: "/", roles: ["patient", "doctor", "admin", "superadmin"]},
    {name: "Terms", link: "/terms", roles: ["patient", "doctor", "admin", "superadmin"]},
    {name: "Upload records", link: "/uploadRecords", roles: ["doctor", "superadmin", "admin"]},
    {name: "About", link: "/about", roles: ["patient", "doctor", "admin"]},
    {name: "Record Management", link: "/recordManagement", roles: ["doctor", "superadmin", "admin"]},
    {name: "Payments", link: "/payments", roles: ["patient", "superadmin", "admin"]},
    {name: "Comm", link: "/Pat_DocComm", roles: ["doctor", "patient", "admin"]},
    {name: "ABAC", link: "/abac", roles: ["admin"]},
    {name: "Review", link: "/priorReview", roles: ["patient", "doctor", "superadmin", "admin"]},
    {name: "Profile", link: "/profile", roles: ["patient", "doctor", "admin"]},
];

export const initialRole = "admin"; // Set the initial role as 'doctor'

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "employee":
        userCategory = "Employee";
        break;
    case "member":
        userCategory = "Member";
        break;       
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "non-subscriber":
        userCategory = "Non-Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let dietaryServicesEligibility;

switch (userCategory) {
    case "Employee":
        dietaryServicesEligibility = "You have full access to our dietary services";
        break;
    case "Member":
        dietaryServicesEligibility = "You have full access to our dietary services and a one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        dietaryServicesEligibility = "You have partial access to facilitate dietary services only";
        break;
    case "Non-Subscriber":
        dietaryServicesEligibility = "You need to enroll or at list subscribe first to avail this facility";
        break;
    default:
        dietaryServicesEligibility = "Eligibility for dietary services not yet determined for this user category";
    }

console.log("Dietary Services Eligibility:", dietaryServicesEligibility);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

# Lab_Practical_Exam
Problem 2: Express Middleware + Route Protection
Task:
Build an Express app with:
● A custom middleware authMiddleware
● Middleware should allow access only if request header contains:
Authorization: admin123
Routes:
● /public → accessible to everyone
● /private → protected route (use middleware)
Expected Output:
● Unauthorized → 403 Access Denied
● Authorized → Welcome to private route

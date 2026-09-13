# 🚀 Node.js Assignment 7 — Route Parameters & Query Parameters

## 👨‍💻 Student Details

| Field            | Details                                 |
| ---------------- | --------------------------------------- |
| **Student Name** | **Akhila Anish Das**                    |
| **Roll No.**     | **150096725016**                        |
| **Cohort**       | **Larry Page**                          |
| **Course**       | **B.Tech CSE 2025–2029**                |
| **Subject**      | **Node.js**                             |
| **Assignment**   | **Assignment 7**                        |
| **Project Name** | **RouteParameters_Assignment7_Node_Ak** |

---

## 📖 Assignment Overview

This assignment demonstrates the implementation of **routing and parameter handling in Express.js**.

The project contains three independent implementations:

### Assignment 1 — Route Parameters

A dynamic `/student/:id` route is created to retrieve and display a student ID.

### Assignment 2 — Query Parameters

A `/search` route accepts `name` and `course` as query parameters and displays their values.

### Assignment 3 — Route Parameters + Query Parameters

A `/student/:id` route combines a dynamic student ID with `name` and `course` query parameters to display a complete student profile.

---

# 1️⃣ Assignment 1 — Route Parameters

## 🎯 Objective

Implement dynamic routing using **Route Parameters** in Express.js.

The route used is:

```text
/student/:id
```

The `:id` portion is dynamic, meaning different student IDs can be supplied through the URL.

The student ID is retrieved using:

```text
req.params.id
```

---

## 🧪 Test Case — Student ID 101

### Request

```text
http://localhost:3000/student/101
```

### Response

```text
Student ID: 101
```

### 📸 Postman Execution

![Assignment 1 - Student ID 101](screenshots/assignment1_student_101.png)

---

## 🧪 Test Case — Student ID 205

The same dynamic route is tested again with another student ID.

### Request

```text
http://localhost:3000/student/205
```

### Response

```text
Student ID: 205
```

### 📸 Postman Execution

![Assignment 1 - Student ID 205](screenshots/assignment1_student_205.png)

---

### ✅ Assignment 1 Result

The `/student/:id` dynamic route successfully retrieves different student IDs using **Route Parameters**.

---

# 2️⃣ Assignment 2 — Query Parameters

## 🎯 Objective

Retrieve and display information using **Query Parameters**.

The route used is:

```text
/search
```

The route accepts two query parameters:

```text
name
course
```

These values are retrieved using:

```text
req.query
```

---

## 🧪 Test Case — Query Parameters Provided

### Request

```text
http://localhost:3000/search?name=Ricky&course=Node.js
```

The URL contains:

```text
name = Ricky
course = Node.js
```

### Response

```text
Name: Ricky
Course: Node.js
```

### 📸 Postman Execution

![Assignment 2 - Search With Parameters](screenshots/assignment2_search_with_parameters.png)

---

## 🧪 Test Case — No Query Parameters

The `/search` route is also tested without providing any query parameters.

### Request

```text
http://localhost:3000/search
```

Since no search parameters are supplied, the application displays:

```text
No search data provided.
```

### 📸 Postman Execution

![Assignment 2 - Search Without Parameters](screenshots/assignment2_search_without_parameters.png)

---

### ✅ Assignment 2 Result

The `/search` route successfully handles both:

* Requests containing `name` and `course`
* Requests without query parameters

---

# 3️⃣ Assignment 3 — Student Profile

## 🎯 Objective

Build a dynamic route using both **Route Parameters and Query Parameters**.

The route used is:

```text
/student/:id
```

The application retrieves:

| Information    | Source             |
| -------------- | ------------------ |
| Student ID     | `req.params.id`    |
| Student Name   | `req.query.name`   |
| Student Course | `req.query.course` |

---

## 🧪 Student Profile Test

### Request

```text
http://localhost:3000/student/101?name=John&course=FullStack
```

The URL contains:

```text
Route Parameter:
id = 101

Query Parameters:
name = John
course = FullStack
```

### Response

```text
Student ID: 101
Name: John
Course: FullStack
```

### 📸 Postman Execution

![Assignment 3 - Student Profile](screenshots/assignment3_student_profile.png)

---

### ✅ Assignment 3 Result

The application successfully combines **Route Parameters** and **Query Parameters** to display a complete student profile.

---

# 📊 Testing Summary

| Assignment   | Request                                   | Result                      |
| ------------ | ----------------------------------------- | --------------------------- |
| Assignment 1 | `/student/101`                            | ✅ Student ID: 101           |
| Assignment 1 | `/student/205`                            | ✅ Student ID: 205           |
| Assignment 2 | `/search?name=Ricky&course=Node.js`       | ✅ Name and Course displayed |
| Assignment 2 | `/search`                                 | ✅ No search data provided.  |
| Assignment 3 | `/student/101?name=John&course=FullStack` | ✅ Student profile displayed |

**Total demonstrated test cases: 5/5 successful ✅**

---

# 🧠 Concepts Demonstrated

## Route Parameters

Route parameters are dynamic values included directly in a route.

Example:

```text
/student/101
```

Here:

```text
:id → 101
```

and Express accesses it through:

```text
req.params.id
```

---

## Query Parameters

Query parameters are values provided after `?` in the URL.

Example:

```text
/search?name=Ricky&course=Node.js
```

The values are accessed using:

```text
req.query.name
req.query.course
```

---

## Combining Both

Route and query parameters can be used together.

Example:

```text
/student/101?name=John&course=FullStack
```

This contains:

```text
req.params.id     → 101
req.query.name    → John
req.query.course  → FullStack
```

---

# 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript**
* **Postman**
* **Visual Studio Code**
* **npm**

---

# 📁 Project Structure

```text
RouteParameters_Assignment7_Node_Ak/
│
├── Assignment1/
│   └── server.js
│
├── Assignment2/
│   └── server.js
│
├── Assignment3/
│   └── server.js
│
├── screenshots/
│   ├── assignment1_student_101.png
│   ├── assignment1_student_205.png
│   ├── assignment2_search_with_parameters.png
│   ├── assignment2_search_without_parameters.png
│   └── assignment3_student_profile.png
│
├── package.json
└── package-lock.json
```

---

# ⚙️ Installation & Setup

## Prerequisites

Install **Node.js** on the system.

Verify the installation:

```bash
node -v
```

```bash
npm -v
```

---

## Install Dependencies

After downloading or cloning the project, open the terminal inside the project folder:

```bash
npm install
```

This installs the dependencies specified in `package.json`.

If Express needs to be installed manually:

```bash
npm install express
```

---

# ▶️ Running Assignment 1

Navigate to the Assignment 1 folder:

```bash
cd Assignment1
```

Start the server:

```bash
node server.js
```

The terminal will display:

```text
Server running at http://localhost:3000
```

Test in a browser or Postman:

```text
http://localhost:3000/student/101
```

or:

```text
http://localhost:3000/student/205
```

---

# ▶️ Running Assignment 2

Stop the previous server:

```text
Ctrl + C
```

Return to the main project directory:

```bash
cd ..
```

Navigate to Assignment 2:

```bash
cd Assignment2
```

Start the server:

```bash
node server.js
```

Test with query parameters:

```text
http://localhost:3000/search?name=Ricky&course=Node.js
```

Test without query parameters:

```text
http://localhost:3000/search
```

---

# ▶️ Running Assignment 3

Stop the Assignment 2 server:

```text
Ctrl + C
```

Return to the main project directory:

```bash
cd ..
```

Navigate to Assignment 3:

```bash
cd Assignment3
```

Start the server:

```bash
node server.js
```

Test:

```text
http://localhost:3000/student/101?name=John&course=FullStack
```

---

# 🌍 Running the Project on Another Computer

The project can be executed on another computer by cloning the GitHub repository.

## 1. Install Node.js

Make sure Node.js is installed:

```bash
node -v
```

```bash
npm -v
```

---

## 2. Clone the Repository

```bash
git clone https://github.com/AkhilaAnishDas/RouteParameters_Assignment7_Node_Ak.git
```

Enter the project folder:

```bash
cd RouteParameters_Assignment7_Node_Ak
```

---

## 3. Install Dependencies

Run:

```bash
npm install
```

This downloads the required Node.js packages.

The `node_modules` folder does not need to be stored in the GitHub repository.

---

## 4. Run Any Assignment

### Assignment 1

```bash
cd Assignment1
node server.js
```

### Assignment 2

```bash
cd Assignment2
node server.js
```

### Assignment 3

```bash
cd Assignment3
node server.js
```

---

## 5. Test the Application

Once the server starts, use Postman or a web browser.

### Assignment 1

```text
http://localhost:3000/student/101
```

### Assignment 2

```text
http://localhost:3000/search?name=Ricky&course=Node.js
```

### Assignment 3

```text
http://localhost:3000/student/101?name=John&course=FullStack
```

---

# 💡 Important Note About `localhost`

The application uses:

```text
localhost:3000
```

`localhost` refers to the **computer currently running the Node.js server**.

Therefore, when another person clones this project and runs:

```bash
node server.js
```

they can use:

```text
http://localhost:3000
```

on their own computer.

They do not need the original computer's `localhost`.

---

# 📦 Project Dependencies

The project uses **Express.js** as its main dependency.

After cloning the repository, simply run:

```bash
npm install
```

npm will install the dependencies specified in:

```text
package.json
```

---

# 🎓 Learning Outcomes

By completing this assignment, the following Express.js concepts were practiced:

* Creating an Express.js server
* Creating GET routes
* Dynamic routing
* Route Parameters
* Query Parameters
* `req.params`
* `req.query`
* Handling missing query parameters
* Combining route and query parameters
* Sending responses using `res.send()`
* Testing APIs using Postman
* Running Node.js applications
* Installing dependencies using npm
* Running the project on another computer

---

# 🏆 Assignment Completion

| Component                         | Status      |
| --------------------------------- | ----------- |
| Dynamic Route `/student/:id`      | ✅ Completed |
| Route Parameters                  | ✅ Completed |
| Query Parameters                  | ✅ Completed |
| `/search` Route                   | ✅ Completed |
| Missing Query Handling            | ✅ Completed |
| Combined Route + Query Parameters | ✅ Completed |
| Postman Testing                   | ✅ Completed |
| Execution Screenshots             | ✅ Included  |

---

## 👨‍💻 Submitted By

**Akhila Anish Das**
**Roll No.: 150096725016**
**Cohort: Larry Page**
**B.Tech CSE 2025–2029**
**Subject: Node.js**
**Assignment 7**

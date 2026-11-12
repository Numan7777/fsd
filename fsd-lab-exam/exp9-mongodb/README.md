# 9. MongoDB Aggregation (Student Grades)

> Core idea: **$unwind → $group → $sort**

## ▶ Start

1. Check that MongoDB is running:

```bash
Get-Service MongoDB
```

It should say **Running**. If it says Stopped, run **Start-Service MongoDB**.

2. VS Code → **Ctrl + Shift + X** → install **MongoDB for VS Code** (if not installed).
3. 🍃 leaf icon → **Add Connection** → **Connect with Connection String** → type **mongodb://localhost:27017** → it turns green.
4. Click **Create New Playground** → Ctrl + A → Delete. (Or create a file named **exp9.mongodb.js**.)

> ⚠️ The file name must end in **.mongodb.js**, not just .js

## 📄 Code: exp9.mongodb.js

```javascript
use('school');

db.students.deleteMany({});

db.students.insertMany([
    { name: "Ravi",  rollNo: 1, subjects: [ { subject: "Maths", marks: 85 }, { subject: "Science", marks: 78 } ] },
    { name: "Sita",  rollNo: 2, subjects: [ { subject: "Maths", marks: 92 }, { subject: "Science", marks: 88 } ] },
    { name: "Arjun", rollNo: 3, subjects: [ { subject: "Maths", marks: 67 }, { subject: "Science", marks: 74 } ] }
]);

// Query 1: Total and average for each student
db.students.aggregate([
    { $unwind: "$subjects" },
    { $group: {
        _id: "$name",
        totalMarks: { $sum: "$subjects.marks" },
        avgMarks:   { $avg: "$subjects.marks" }
    } },
    { $sort: { avgMarks: -1 } }
]);

// Query 2: Average, highest and lowest for each subject
db.students.aggregate([
    { $unwind: "$subjects" },
    { $group: {
        _id: "$subjects.subject",
        average: { $avg: "$subjects.marks" },
        highest: { $max: "$subjects.marks" },
        lowest:  { $min: "$subjects.marks" }
    } }
]);
```

## 🏁 End

1. **Ctrl + S** → click **▶** (top right) → **Yes** → the Query 2 result shows on the right.
2. To show Query 1: select its lines → right-click → **MongoDB: Run Selected Lines From Playground**.
3. Expected results:

| Query 1 (per student) | Query 2 (per subject) |
|---|---|
| Sita: 180 total, 90 avg | Maths: avg 81.33, max 92, min 67 |
| Ravi: 163 total, 81.5 avg | Science: avg 80, max 88, min 74 |
| Arjun: 141 total, 70.5 avg | |

> 💡 Backup (if the lab has Compass): Connect → **>_ MONGOSH** at the bottom → paste the same code, but write the first line as **use school** (no brackets).

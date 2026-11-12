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

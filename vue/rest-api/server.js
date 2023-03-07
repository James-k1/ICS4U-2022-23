import express from 'express'
const app = express()

const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())
//create endpoint(routes)
let students = [
    {id: 1, name: 'Fred', age: 16},
    {id: 2, name: 'Michel', age: 17},
    {id: 3, name: 'Kyle', age: 16},
]
let idNum = students.length;
app.get('/api/students', (req, res) => {
    res.send(students)
})

app.get('/api/students/:id', (req,res) => {
    const student = students.find(s => s.id==parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found")
    res.send(student)
})

app.post('/api/students', (req, res) => {

    const student = {
        id: ++idNum,
        name: req.body.name,
        age: req.body.age
    }
    students.push(student)
    res.send(student)
})

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id==parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found")

    student.name = req.body.name
    student.age = req.body.name
    res.send(student)
})

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id==parseInt(req.params.id))
    if (!student) return res.status(404).send("Student not found")
    students.splice(students.indexOf(student),1)
    res.send(student)
    
})

app.listen(PORT, () => console.log("Server started on port " + PORT))


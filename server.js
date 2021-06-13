const express = require("express")
const app = express()

app.use(express.urlencoded({extended: true}))

let tasks = [
    'sample task'
]

app.get("/", (req, res) => {
    let taskList = tasks.map(tsk => `<li>${tsk}</li>`).join('\n')
    res.send(`
    <html>
        <form action="/" method="post">
            <input name="newtask">
            <button type="submit">ADD</button>
        </form>
        <ul>
            ${taskList}
        </ul>
    </html>
`)
})

app.post('/', (req, res) => {
    tasks.push(req.body.newtask)
    console.log(req.body.newtask)
    res.redirect('/')
})

app.listen(5555, () => {
    console.log("started")
})

require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d89575e7087af2831bf708b').then((task) => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deleteById = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d8c3045da301f17d10f0482')
.then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
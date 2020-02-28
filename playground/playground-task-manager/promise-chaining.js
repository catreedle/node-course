require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5d89692760de002ee2dd0606', { age: 16}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 16})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d89692760de002ee2dd0606', 50).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
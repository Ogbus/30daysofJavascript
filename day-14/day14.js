try {
    let lastName = 'Felix'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
}

// ================

try {
    let lastName = 'Felix'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
} finally {
    console.log('Guess what guys, i will always be executed no matter what the code throws up.')
}

// ================
// The catch block taking a parameter such as name and message (these are default parameters that can be apply in the catch block.)
try {
    let lastName = 'Felix'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}
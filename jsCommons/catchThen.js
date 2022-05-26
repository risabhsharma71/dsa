// const promise = new Promise((resolve, reject) => {
//     reject(Error('Some Error Occurred'));
// }).then(error => console.log(error.message))
//     .catch(error => console.log(error.message))

function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise = job();

promise

    .then(function () {
        console.log('Success 1');
    })

    .then(function () {
        console.log('Success 2');
    })

    .then(function () {
        console.log('Success 3');
    })

    .catch(function () {
        console.log('Error 1');
    })

    .then(function () {
        console.log('Success 4');
    })
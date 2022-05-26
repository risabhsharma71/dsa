const thenable = {
    then: function (callback) {
        console.log("before")
        setTimeout(() => callback(2), 3000);
        console.log("after")
    }
};

const abc = async () => {
    const value = await thenable;
    console.log(value); // 2
}

abc()
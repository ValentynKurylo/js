//CallBack
/*
function WakeUp(is_I_woke_up, cb){
    setTimeout(()=>{
        if (is_I_woke_up) {
            //console.log('I wake up');
            cb(null, 'You woke up')
        }
        else
            return cb('You are still sleeping');
    }, 2000)
}
function wash(wakeUp, cb){
    setTimeout(()=>{
        if (wakeUp)
            cb(null, 'You washed');
        else
            return cb('You didnt wake up')
    }, 1000)
}
function haveBreakfast(wash, cb){
    setTimeout(()=>{
    if(wash)
        cb(null, 'You had breakfast')
    else
        return cb('You didnt wash')}, 1500)
}
function goWork(hadBreakfast, cb){
    setTimeout(()=>{
        if(hadBreakfast)
            cb(null, 'You went to work')
        else
            return  cb('You didnt had breakfast')
    }, 1000)
}
function goHome(wentWork, cb){
    setTimeout(()=>{
        if(wentWork)
            cb(null, 'You returned to home')
        else
            return cb('You didnt go to work')
    }, 4000)
}
function study(returnHome, cb){
    setTimeout(()=>{
        if (returnHome)
            cb(null, 'You studied')
        else
            return cb('You didnt return home')
    }, 2000)
}
function rest(studied, cb){
    setTimeout(()=>{
    if(studied)
        cb(null, 'you rested')
    else
        return cb('You didnt study')
    }, 1500)
}
function sleep(rested, cb){
    setTimeout(()=>{
    if(rested)
        cb(null, 'You go to sleep')
    else
        return cb('Yoy didnt rest')
    }, 300)
}
WakeUp(true, (err, data) => {
    if (!err) {
        console.log(data);
        wash(true, (err, data) => {
            if (!err) {
                console.log(data);
                haveBreakfast(true, (err, data)=>{
                    if (!err){
                        console.log(data);
                        goWork(true, (err, data)=>{
                            if(!err){
                                console.log(data);
                                goHome(true, (err, data)=>{
                                    if(!err){
                                        console.log(data);
                                        study(true, (err, data)=>{
                                            if(!err){
                                                console.log(data);
                                                rest(true, (err, data)=>{
                                                    if(!err){
                                                        console.log(data);
                                                        sleep(true, (err, data)=>{
                                                            if(!err){
                                                                console.log(data);
                                                            }
                                                            else
                                                                console.log(err);
                                                        })
                                                    }
                                                    else
                                                        console.log(err);
                                                })
                                            }
                                            else
                                                console.log(err);
                                        })
                                    }
                                    else
                                        console.log(err);
                                })
                            }
                            else
                                console.log(err);
                        })
                    }
                    else
                        console.log(err);
                })
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
})

 */

//Promise
/*/
function WakeUp(is_I_woke_up) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_I_woke_up) {
                resolve('You woke up')
            } else
                reject('You are still sleeping');
        }, 2000)
    })
}
function wash(wakeUp){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp)
                resolve( 'You washed');
            else
                reject('You didnt wake up')
        }, 1000)
    })
}
function haveBreakfast(wash) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wash) {
                resolve('You had breakfast')
            } else
                reject('You didnt wash');
        }, 1500)
    })
}
function goWork(hadBreakfast){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hadBreakfast)
                resolve( 'You went to work');
            else
                reject('You didnt had breakfast')
        }, 1000)
    })
}
function goHome(wentWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wentWork) {
                resolve('You returned to home')
            } else
                reject('You didnt go to work');
        }, 4000)
    })
}
function study(returnHome){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (returnHome)
                resolve('You studied' );
            else
                reject('You didnt return home')
        }, 2000)
    })
}
function rest(studied) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studied) {
                resolve('you rested')
            } else
                reject('You didnt study');
        }, 1500)
    })
}
function sleep(rested){//Тут десь є помилка
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rested)
                resolve( 'You go to sleep');
            else
                reject('You didnt rest')
        }, 300)
    })
}


WakeUp(true).then(value => {
        console.log(value);
        return wash(value)
    }
).then(value => {
    console.log(value);
    return haveBreakfast(value)
}).then(value => {
    console.log(value);
    return goWork(true)
}).then(value => {
    console.log(value);
    return goHome(value)
}).then(value => {
    console.log(value);
    return study(value)
}).then(value => {
    console.log(value);
    return rest(value)
}).then(value => {
    console.log(value);
    return sleep(value)
}).then(value => {
    console.log(value);
}).then(final =>{
    console.log('Day is over');
}).catch(reason => {
    console.log(reason);
})

 */

//async

function WakeUp(is_I_woke_up) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_I_woke_up) {
                resolve('You woke up')
            } else
                reject('You are still sleeping');
        }, 2000)
    })
}
function wash(wakeUp){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp)
                resolve( 'You washed');
            else
                reject('You didnt wake up')
        }, 1000)
    })
}
function haveBreakfast(wash) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wash) {
                resolve('You had breakfast')
            } else
                reject('You didnt wash');
        }, 1500)
    })
}
function goWork(hadBreakfast){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hadBreakfast)
                resolve( 'You went to work');
            else
                reject('You didnt had breakfast')
        }, 1000)
    })
}
function goHome(wentWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wentWork) {
                resolve('You returned to home')
            } else
                reject('You didnt go to work');
        }, 4000)
    })
}
function study(returnHome){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (returnHome)
                resolve('You studied' );
            else
                reject('You didnt return home')
        }, 2000)
    })
}
function rest(studied) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studied) {
                resolve('you rested')
            } else
                reject('You didnt study');
        }, 1500)
    })
}
function sleep(rested){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rested)
                resolve( 'You go to sleep');
            else
                reject('You didnt rest')
        }, 300)
    })
}

async function myDay(){
    try {
        let wake = await WakeUp(true)
        console.log(wake);
        wake = await wash(true)
        console.log(wake);
        wake = await haveBreakfast(false)
        console.log(wake);
        wake = await goWork(true)
        console.log(wake);
        wake = await goHome(true)
        console.log(wake);
        wake = await study(true)
        console.log(wake);
        wake = await rest(true)
        console.log(wake);
        wake = await sleep(true)
        console.log(wake);
    }
    catch (err){
        console.log(err);
    }
}
myDay()
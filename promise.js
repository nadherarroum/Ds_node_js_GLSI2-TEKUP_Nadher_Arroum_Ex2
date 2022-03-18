/*
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, 2, (repos, levelNumber) => {
        getBrunch(repos[levelNumber], (brunch) => {
            if (brunch == "master")
                postCommit('new Version', (commited) => {
                    if (commited) console.log("The new version is commited");
                    else console.log("The new version is not commited");
                });
            });
    });
})
*/
getUser(1).then(function () {
    getRepositories(2)
}).then(function () {
    getBrunch()
}).then(function (brunch) {
    //if(brunch == "master")
        postCommit('new Version').then(()=>{
            //if(commited)
                console.log("The new version is commited");
        })
}).then(console.log("The new version is not commited"))

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('User is founded');
            let user = {id: id, gitHubUsername : 'username'};
            resolve(user);
        }, 2000);
    });
}

function getRepositories(username, level) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('repos is ready');
            let repos = ['br1','main','master'];
            resolve(repos,level);
        }, 2000);
    });
}

function getBrunch(repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('repo[] is ready');
            resolve(repo);
        }, 2000);
    });
}

function postCommit(vers) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('new Version');
            resolve(vers == 'new Version');
        }, 2000);
    });
}
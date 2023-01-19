const cluster = require('cluster');

function startWorker() {
    const worker = cluster.fork();
    console.log(`CLUSTER: WORKER ${worker.id} started`);
}

if (cluster.isMaster){
    require('os').cpus().forEach(startWorker);
    cluster.on('disconnect', worker => console.log(
        `CLUSTER: WORKER ${worker.id} disconected from the cluster.`
    ))

    cluster.on('exit', (worker, code, signal) => {
        console.log(`CLUSTER: WORKER ${worker.id} died with exit. code ${code} (${signal})`)
        //startWorker();
    })
}

else {
    const port = process.env.PORT || 3000;
    require('./server1.js')(port);
}
const express = require('express');
const cluster = require('cluster');

const app = express();

app.use((req, res, next) => {
    if(cluster.isWorker)
      console.log(`Worker ${cluster.worker.id} received request`)
    next()
  })

  app.get('/fail', (req, res) => {
    throw new Error('Nope!')
})

app.get('/epic-fail', (req, res) => {
  process.nextTick(() => {
    throw new Error('Kaboom!')
  })
  res.send('embarrased')
})

app.get('*', (req, res) => res.send('online'))

app.get('*', (req, res) => res.send('online'))

process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION\n', err.stack);
  // do any cleanup you need to do here...close 
  // database connections, etc.  you'll probably
  // also want to notify your operations team
  // that a critical error occurred; you can use
  // email or even better a service like Sentry,
  // Rollbar, or New Relic
  process.exit(1)
});


function startServer(port) {
    app.listen(port, function() {
        console.log(`Express started in ${app.get('env')} mode on 
        http://localhost:${port}; Press Ctrl-C to terminate`)
    })
}

if (require.main == module) {
    startServer(process.env.PORT || 3000)
} else {
    module.exports = startServer;
}
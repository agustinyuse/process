# process

Desafío coderhouse: Usando el objeto process y fork de child_process

## 2da parte

Uso de la lib pm2 y forever para correr procesos en diferentes fork y clusters.

scripts

```
"start": "node server.js"
"pm2fork": "pm2 start server.js --name='serverpmfork' --watch"
"pm2cluster": "pm2 start server.js --name='serverpmcluster' --watch -i max"
"forever": "forever start -w server.js
"nodemonfork": "nodemon server.js"
```

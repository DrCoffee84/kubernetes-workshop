# kubernetes-workshop

https://miro.com/app/board/o9J_lnpoUFU=/?invite_link_id=781817443477

Commands to copy-paste:

Verify docker installations with command run
```bash
docker run --rm hello-world
```

Verify kubernetes installations with kubectl commands
```bash
kubectl cluster-info
kubectl get nodes
kubectl config view
```

Run a instance of mongodb in container
```bash
docker run --rm -p 27017:27017 --name mongo-docker mongo
```

Verify nodeJS installation and test application
```bash
cd simple-express-mongo-app
node -v
npm -v
npm install
```

Start and test aplication
```bash
npm start
npm test

# Use another config file
export NODE_ENV=localhost 
```

# Docker

### Create and run
```bash
USER=dboullon
docker build . -t ${USER}/simple-express-mongo-app

# run image 
docker run -p 3000:3000 --rm --name simple-express-mongo-docker dboullon/simple-express-mongo-app
## don't work until the network had set
```

### Create network (to test app)
```bash
docker network create simple-express-mongo-network
docker network connect simple-express-mongo-network --alias=mongo-network mongo-docker

docker network inspect simple-express-mongo-network

docker run -itd --network=simple-express-mongo-network nginx 

docker run -p 3000:3000 --rm --name simple-express-mongo-docker --env NODE_ENV=docker --network=simple-express-mongo-network dboullon/simple-express-mongo-app 
```

### Push image
```bash
docker push ${USER}/simple-express-mongo-app:latest
```
# Kubernetes 

alias
```bash
vi ~/.bashrc
alias k='kubectl'
source ~/.bashrc # or exec bash
```

## Play basic with Kubernetes

see this documentation [here](k8s/README.md)

## Deploy simple-express-mongo app

see this documentation [here](simple-express-mongo-app/k8s/README.md)

# kubernetes-workshop
https://miro.com/app/board/o9J_lq0-Tnw=/

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
docker run --rm -p 27017:27017 mongo
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
```

# Docker

Create image
```bash
docker build . -t dboullon/simple-express-mongo-app
```

push image
```bash
docker push dboullon/simple-express-mongo-app:latest
```

# Kubernetes 

alias
```bash
vi ~/.bashrc
alias k='kubectl'
source ~/.bashrc # or exec bash
```

## Jugar con kubernetes

## Desplegar simple-express-mongo-app

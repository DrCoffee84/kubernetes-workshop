## Deploy simple-express-mongo app

### Create namespace
```bash
NAMESPACE=simple-express-mongo
kubectl create namespace ${NAMESPACE}
kubectl get namespace
```

### Create pod 
```bash
kubectl create -f ./simple-express-mongo-app/k8s/app-simple-pod.yaml
```

### Get pod
```bash
kubectl get pod -n ${NAMESPACE}
```

### Log pod 
```bash
kubectl logs simple-express-mongo-app-pod -n ${NAMESPACE}
```

### Delete pod
```bash
kubectl delete pod simple-express-mongo-app-pod -n ${NAMESPACE}
```

### Create mongo pod 
```bash
kubectl create -f ./simple-express-mongo-app/k8s/mongo-pod.yaml

# Log pod 
kubectl logs mongo-pod -n ${NAMESPACE}
```

### Create service 
```bash
kubectl create -f ./simple-express-mongo-app/k8s/mongo-service.yaml
kubectl get service mongo-service -n ${NAMESPACE}
```

### Create configMap
```bash
k apply -f ./simple-express-mongo-app/k8s/app-configmap.yaml
```

### Create pod with all spec necesary 
```bash
kubectl create -f ./simple-express-mongo-app/k8s/app-pod.yaml
```

### Create deployment for mongo db 
```bash
kubectl apply -f ./simple-express-mongo-app/k8s/mongo-deployment.yaml
```

### Create deployment for simple-express-mongo-app
```bash
kubectl apply -f ./simple-express-mongo-app/k8s/app-deployment.yaml
```

### Create service for simple-express-mongo-app
```bash
kubectl apply -f ./simple-express-mongo-app/k8s/app-service.yaml
```

## test from another pod 
```bash
POD=simple-express-mongo-app-deployment-7b76df689c-4fznq
kubectl exec -it ${POD} -- sh
REST API:

curl --location --request GET 'http://simple-express-mongo-service.simple-express-mongo.svc.cluster.local:80/users'

curl --location --request POST 'http://simple-express-mongo-service.simple-express-mongo.svc.cluster.local:80/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "lastname": "Boullon",
    "name": "Daniel",
    "email": "dboullon@taglatam.com"
}'
```

### Create ingress for simple-express-mongo-app (hasta aca llegue)
```bash
kubectl apply -f ./simple-express-mongo-app/k8s/app-ingress.yaml
```

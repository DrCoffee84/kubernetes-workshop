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
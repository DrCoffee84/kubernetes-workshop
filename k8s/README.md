# Kubernetes 

### Create namespace
```bash
NAMESPACE=test
kubectl create namespace ${NAMESPACE}
kubectl get namespace
```

### Create first pod :) 
```bash
kubectl create -f ./k8s/pod-min.yaml -n ${NAMESPACE}

# Enter to the pod with sh 
kubectl exec -it nginx -- sh
ps fax
```

### Get pods 
```bash
kubectl get pod
```

if it fails it is because you are missing the namespace
```bash
kubectl get pod -n  ${NAMESPACE}
```
or you can change namespace context
```bash
kubectl config set-context --current --namespace=${NAMESPACE}
```

### Delete first pod :( 
```bash
kubectl delete -f ./k8s/pod-min.yaml -n ${NAMESPACE}
```

Or delete by name
```bash
kubectl delete pod nginx -n ${NAMESPACE}
```

### Create Deployment

```bash
kubectl apply -f k8s/deploy-min.yaml -n ${NAMESPACE}
```

### Get Deployment

```bash
kubectl get deployment nginx-deployment -n ${NAMESPACE}
```
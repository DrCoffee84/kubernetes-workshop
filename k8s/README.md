# Kubernetes 

Create namespace
```bash
kubectl create namespace test
kubectl get namespace
```

Create first pod :) 
```bash
kubectl create -f ./k8s/pod-min.yaml -n test
kubectl exec -it nginx -- sh
ps fax
```

Get pods 
```bash
kubectl get pod
```

if it fails it is because you are missing the namespace
```bash
kubectl get pod -n test
```
or you can change namespace context
```bash
kubectl config set-context --current --namespace=test
```

Delete first pod :( 
```bash
kubectl delete -f ./k8s/pod-min.yaml -n test
```
Or delete by name
```bash
kubectl delete pod test-app -n test
```
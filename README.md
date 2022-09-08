# Hello VuePress

plugins:

1. https://giscus.app/zh-CN

theme:

1. https://github.com/Renovamen/vuepress-theme-gungnir

CD:

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```





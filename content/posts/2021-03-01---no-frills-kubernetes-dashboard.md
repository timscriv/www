---
title: "No Frills: Kubernetes Dashboard"
date: "2021-03-01T12:00:00.000Z"
template: post
draft: false
slug: "no-frills-kubernetes-dashboard/"
category: "Kubernetes"
tags:
  - "No frills"
  - "Kubernetes"
description: "A no-frills topic on how to add and connect to a kubernetes dashboard (with authentication)."
---

> No frills is an ongoing series that doesn't give the background or really anything other than "here's how to do that thing you are trying to do". 

Here's how to connect to a Kubernetes cluster with authentication in just a few steps. Check out the documentation [here](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/) for some more background.

> I use powershell for running these on a windows machine

### Connect to kubernetes cluster

Make sure you have the kubernetes cluster as your current context with

```ps1
kubectl config current-context
```

to view your context, and

```ps1
kubectl config use-context <cluster-name>
```

to change your current context.


### Make sure the dashboard is deployed

```ps1
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```

### Run the dashboard

```ps1
kubectl proxy
```

> Dashboard should now be available at <http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy>

### Login (for Azure Kubernetes Service (AKS))

``` ps1
az aks get-credentials -a --resource-group <RG_NAME> --name <CLUSTER_NAME>
```

> You only have to do this if you haven't done it before for this cluster (or its erroring).

Now, in the login screen select Kubeconfig and use the file from `%USERPROFILE%\.kube\config`.

🎉 Sign in, and you should be good to go! 🎉

I hope this guide was useful and helps you solve more problems!
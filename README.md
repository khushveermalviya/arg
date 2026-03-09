# Portfolio App - React Vite with Docker & Kubernetes

A simple portfolio application built with React and Vite, containerized with Docker and ready for Kubernetes deployment.

## Features

- Modern React 18 with Vite
- Responsive portfolio designasdfsdaf
- Docker multi-stage build for optimized production
- Kubernetes deployment with 3 replicas
- NodePort service for external access

## Local Development

```bash
# Install dependencies
npm install

# Run development server (with --host flag)
npm run dev
```

The app will be available at `http://localhost:5173`

## Docker Build & Run

```bash
# Build Docker image
docker build -t portfolio-app:latest .

# Run container locally
docker run -p 8080:80 portfolio-app:latest
```

Access the app at `http://localhost:8080`

## Kubernetes Deployment (k3s)

### Prerequisites
- k3s cluster running
- kubectl configured

### Deploy to k3s

```bash
# Build and load the image into k3s
docker build -t portfolio-app:latest .
docker save portfolio-app:latest | sudo k3s ctr images import -

# Apply Kubernetes configuration
kubectl apply -f k3s.yaml

# Check deployment status
kubectl get deployments
kubectl get pods
kubectl get services
```

### Access the Application

The application is exposed via NodePort on port **30080**.

```bash
# Get node IP
kubectl get nodes -o wide

# Access the app
http://<NODE_IP>:30080
```

Or if running locally:
```bash
http://localhost:30080
```

### Useful Commands

```bash
# View logs
kubectl logs -l app=portfolio

# Scale deployment
kubectl scale deployment portfolio-app --replicas=5

# Delete deployment
kubectl delete -f k3s.yaml
```

## Project Structure

```
.
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration (with --host)
├── package.json         # Dependencies
├── Dockerfile           # Multi-stage Docker build
├── .dockerignore        # Docker ignore rules
└── k3s.yaml            # Kubernetes manifests (Deployment + Service)
```

## Configuration Details

### Vite Config
- Host mode enabled for Docker compatibility
- Port: 5173
- Polling enabled for hot reload in containers

### Kubernetes
- **Replicas**: 3
- **Service Type**: NodePort
- **NodePort**: 30080
- **Container Port**: 80
- **Resource Limits**: 128Mi memory, 200m CPU

## License

MIT

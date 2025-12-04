# Docker Deployment Guide

## Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed (included with Docker Desktop)

---

## 🚀 Quick Start

### Production Build (Recommended)

Build and run the production-optimized version:

```bash
docker-compose up -d
```

The app will be available at: **http://localhost:3000**

### Development Mode (with Hot Reload)

Run the development version with live code updates:

```bash
docker-compose --profile dev up qrcode-generator-dev
```

The dev server will be available at: **http://localhost:3001**

---

## 📋 Docker Commands

### Build and Start
```bash
# Build and start in detached mode
docker-compose up -d

# Build and start with logs
docker-compose up

# Force rebuild
docker-compose up --build
```

### Stop and Remove
```bash
# Stop containers
docker-compose stop

# Stop and remove containers
docker-compose down

# Remove containers, networks, and volumes
docker-compose down -v
```

### View Logs
```bash
# View logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# View logs for specific service
docker-compose logs -f qrcode-generator
```

### Container Management
```bash
# List running containers
docker-compose ps

# Restart containers
docker-compose restart

# Execute command in container
docker-compose exec qrcode-generator sh
```

---

## 🏗️ Architecture

### Production Setup
- **Build Stage**: Node.js 18 Alpine (builds the React app)
- **Runtime Stage**: Nginx Alpine (serves static files)
- **Port**: 3000 (host) → 80 (container)
- **Size**: ~50MB (optimized multi-stage build)

### Development Setup
- **Runtime**: Node.js 18 Alpine
- **Port**: 3001 (host) → 3000 (container)
- **Features**: Hot reload, volume mounting
- **Profile**: `dev` (must be explicitly enabled)

---

## 📁 File Structure

```
qrcode-generator/
├── Dockerfile              ← Multi-stage build configuration
├── docker-compose.yml      ← Docker Compose configuration
├── nginx.conf             ← Nginx web server configuration
├── .dockerignore          ← Files to exclude from Docker build
└── DOCKER.md              ← This file
```

---

## ⚙️ Configuration

### Ports

**Production**:
- Host: `3000`
- Container: `80`

**Development**:
- Host: `3001`
- Container: `3000`

To change ports, edit `docker-compose.yml`:
```yaml
ports:
  - "YOUR_PORT:80"  # For production
  - "YOUR_PORT:3000"  # For development
```

### Environment Variables

Add environment variables in `docker-compose.yml`:
```yaml
environment:
  - NODE_ENV=production
  - VITE_API_URL=https://api.example.com
```

### Nginx Configuration

Customize `nginx.conf` for:
- Custom domain
- SSL/TLS certificates
- Additional security headers
- Cache policies
- Compression settings

---

## 🔧 Advanced Usage

### Build Only (No Run)
```bash
docker-compose build
```

### Run Specific Service
```bash
# Production
docker-compose up qrcode-generator

# Development
docker-compose --profile dev up qrcode-generator-dev
```

### Scale Services
```bash
docker-compose up --scale qrcode-generator=3
```

### View Resource Usage
```bash
docker stats qrcode-generator
```

### Inspect Container
```bash
# Get container details
docker inspect qrcode-generator

# View container logs
docker logs qrcode-generator

# Access container shell
docker exec -it qrcode-generator sh
```

---

## 🌐 Deployment Options

### Local Development
```bash
docker-compose up -d
```
Access at: http://localhost:3000

### Production Server
```bash
# Build and deploy
docker-compose up -d --build

# With custom compose file
docker-compose -f docker-compose.prod.yml up -d
```

### Cloud Platforms

#### Docker Hub
```bash
# Tag image
docker tag qrcode-generator username/qrcode-generator:latest

# Push to Docker Hub
docker push username/qrcode-generator:latest
```

#### AWS ECS / Azure Container Instances / Google Cloud Run
- Use the Dockerfile to build
- Push to respective container registry
- Deploy using platform tools

---

## 🔒 Security Best Practices

### Implemented in Configuration
✅ Multi-stage build (smaller attack surface)
✅ Non-root user (Nginx runs as nginx user)
✅ Security headers (X-Frame-Options, CSP, etc.)
✅ Hidden file protection
✅ Health check endpoint
✅ Minimal base image (Alpine Linux)

### Additional Recommendations
- Use specific version tags (not `latest`)
- Scan images for vulnerabilities
- Keep base images updated
- Use secrets management for sensitive data
- Enable Docker Content Trust

---

## 📊 Performance Optimization

### Build Optimization
- Multi-stage build reduces final image size
- Layer caching speeds up rebuilds
- `.dockerignore` excludes unnecessary files

### Runtime Optimization
- Nginx serves static files efficiently
- Gzip compression enabled
- Static asset caching (1 year)
- Health checks for monitoring

### Resource Limits
Add to `docker-compose.yml`:
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
    reservations:
      cpus: '0.25'
      memory: 256M
```

---

## 🧪 Testing

### Test Production Build
```bash
# Build
docker-compose build

# Run
docker-compose up -d

# Test
curl http://localhost:3000

# Check health
curl http://localhost:3000/health
```

### Test Development Build
```bash
# Run dev mode
docker-compose --profile dev up qrcode-generator-dev

# Test
curl http://localhost:3001
```

---

## 🐛 Troubleshooting

### Container Won't Start
```bash
# Check logs
docker-compose logs qrcode-generator

# Check container status
docker-compose ps

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Port Already in Use
```bash
# Find process using port
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # Mac/Linux

# Change port in docker-compose.yml
ports:
  - "3002:80"  # Use different port
```

### Build Fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

### Can't Access Application
- Check if container is running: `docker-compose ps`
- Check logs: `docker-compose logs -f`
- Verify port mapping: `docker port qrcode-generator`
- Test health endpoint: `curl http://localhost:3000/health`

### Development Hot Reload Not Working
- Ensure volumes are mounted correctly
- Check file permissions
- Restart container: `docker-compose restart qrcode-generator-dev`

---

## 📈 Monitoring

### Health Checks
```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' qrcode-generator

# View health check logs
docker inspect --format='{{json .State.Health}}' qrcode-generator | jq
```

### Resource Monitoring
```bash
# Real-time stats
docker stats qrcode-generator

# Container processes
docker top qrcode-generator
```

---

## 🔄 Updates and Maintenance

### Update Application
```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build
```

### Update Base Images
```bash
# Pull latest base images
docker-compose pull

# Rebuild
docker-compose up -d --build
```

### Cleanup
```bash
# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune

# Complete cleanup
docker system prune -a --volumes
```

---

## 🌍 Environment-Specific Configurations

### Create Multiple Compose Files

**docker-compose.prod.yml**:
```yaml
version: '3.8'
services:
  qrcode-generator:
    build:
      context: .
    ports:
      - "80:80"
    restart: always
```

**Usage**:
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

---

## 📝 Docker Compose Services

### Production Service (`qrcode-generator`)
- **Purpose**: Production-ready application
- **Start**: Automatically with `docker-compose up`
- **Port**: 3000
- **Features**: Optimized build, Nginx serving

### Development Service (`qrcode-generator-dev`)
- **Purpose**: Development with hot reload
- **Start**: Only with `--profile dev` flag
- **Port**: 3001
- **Features**: Volume mounting, live updates

---

## ✅ Verification Checklist

After deployment:
- [ ] Container is running: `docker-compose ps`
- [ ] Application accessible: http://localhost:3000
- [ ] Health check passing: `curl http://localhost:3000/health`
- [ ] No errors in logs: `docker-compose logs`
- [ ] QR code generation works
- [ ] All export formats work
- [ ] Responsive design works

---

## 🎯 Quick Reference

```bash
# Start production
docker-compose up -d

# Start development
docker-compose --profile dev up qrcode-generator-dev

# Stop all
docker-compose down

# View logs
docker-compose logs -f

# Rebuild
docker-compose up -d --build

# Access container
docker-compose exec qrcode-generator sh

# Check health
curl http://localhost:3000/health
```

---

## 📞 Support

For issues:
1. Check logs: `docker-compose logs`
2. Verify Docker installation: `docker --version`
3. Check Docker Compose: `docker-compose --version`
4. Review this guide's troubleshooting section

---

## 📄 License

Same as main project - MIT License

---

**Your QR Code Generator is now containerized and ready for deployment!** 🐳✨

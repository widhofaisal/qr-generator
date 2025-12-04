# Docker Quick Start

## 🐳 Run with Docker in 3 Steps

### Prerequisites
- Docker Desktop installed ([Download here](https://www.docker.com/products/docker-desktop))

---

## Quick Start

### Windows
```bash
# Option 1: Use the launcher script
docker-start.bat

# Option 2: Manual command
docker-compose up -d
```

### Mac/Linux
```bash
# Option 1: Use the launcher script
chmod +x docker-start.sh
./docker-start.sh

# Option 2: Manual command
docker-compose up -d
```

### Access the Application
Open your browser and go to: **http://localhost:3000**

---

## Common Commands

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose stop

# Stop and remove containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Check status
docker-compose ps
```

---

## Development Mode

Run with hot reload for development:

```bash
docker-compose --profile dev up qrcode-generator-dev
```

Access at: **http://localhost:3001**

---

## Troubleshooting

### Docker not found
- Install Docker Desktop
- Restart your terminal
- Verify: `docker --version`

### Port already in use
Edit `docker-compose.yml` and change the port:
```yaml
ports:
  - "3002:80"  # Change 3000 to 3002
```

### Container won't start
```bash
# Check logs
docker-compose logs

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

---

## What's Included

✅ **Production-optimized build**
- Multi-stage Docker build
- Nginx web server
- Gzip compression
- Security headers
- Health checks

✅ **Small image size** (~50MB)
✅ **Fast startup** (<5 seconds)
✅ **Automatic restart** on failure
✅ **Easy deployment** to any Docker host

---

## Next Steps

- **Full Documentation**: See [DOCKER.md](DOCKER.md)
- **Application Guide**: See [QUICKSTART.md](QUICKSTART.md)
- **Features**: See [FEATURES.md](FEATURES.md)

---

**That's it! Your QR Code Generator is now running in Docker.** 🎉

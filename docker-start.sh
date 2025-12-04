#!/bin/bash

echo "========================================"
echo "QR Code Generator - Docker Launcher"
echo "========================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker is not installed"
    echo ""
    echo "Please install Docker from:"
    echo "https://www.docker.com/products/docker-desktop"
    echo ""
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "ERROR: Docker is not running"
    echo ""
    echo "Please start Docker and try again."
    echo ""
    exit 1
fi

echo "Docker is ready!"
echo ""
echo "Starting QR Code Generator..."
echo ""

# Start Docker Compose
docker-compose up -d

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "SUCCESS! Application is running"
    echo "========================================"
    echo ""
    echo "Access the application at:"
    echo "http://localhost:3000"
    echo ""
    echo "To stop the application, run:"
    echo "docker-compose down"
    echo ""
    echo "To view logs, run:"
    echo "docker-compose logs -f"
    echo ""
    
    # Wait a moment for the container to start
    sleep 3
    
    # Try to open in browser (works on macOS and Linux with xdg-open)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:3000
    elif command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:3000
    fi
else
    echo ""
    echo "ERROR: Failed to start the application"
    echo ""
    echo "Check the logs with:"
    echo "docker-compose logs"
    echo ""
    exit 1
fi

@echo off
echo ========================================
echo QR Code Generator - Docker Launcher
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker is not installed or not in PATH
    echo.
    echo Please install Docker Desktop from:
    echo https://www.docker.com/products/docker-desktop
    echo.
    pause
    exit /b 1
)

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker is not running
    echo.
    echo Please start Docker Desktop and try again.
    echo.
    pause
    exit /b 1
)

echo Docker is ready!
echo.
echo Starting QR Code Generator...
echo.

REM Start Docker Compose
docker-compose up -d

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Application is running
    echo ========================================
    echo.
    echo Access the application at:
    echo http://localhost:9090
    echo.
    echo To stop the application, run:
    echo docker-compose down
    echo.
    echo To view logs, run:
    echo docker-compose logs -f
    echo.
    
    REM Wait a moment for the container to start
    timeout /t 3 /nobreak >nul
    
    REM Try to open in browser
    start http://localhost:9090
) else (
    echo.
    echo ERROR: Failed to start the application
    echo.
    echo Check the logs with:
    echo docker-compose logs
    echo.
)

pause

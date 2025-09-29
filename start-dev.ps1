# Script to start both frontend and backend servers for SureFindings E-commerce

# Add Node.js to PATH
$env:PATH += ';C:\Program Files\nodejs'

Write-Host "Starting SureFindings E-commerce development servers..." -ForegroundColor Green
Write-Host "=====================================================" -ForegroundColor Green

# Start backend server in the background
Write-Host "Starting backend server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-Command", "cd backend; npm run dev" -WindowStyle Minimized

# Wait a few seconds for backend to start
Start-Sleep -Seconds 5

# Start frontend server
Write-Host "Starting frontend server..." -ForegroundColor Yellow
npm run dev

Write-Host "Servers stopped." -ForegroundColor Red
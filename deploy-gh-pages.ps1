# PowerShell script to build and deploy React app to GitHub Pages
# This script assumes you're using npm and have already committed any source code changes

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# 1. Clean previous build (optional but recommended)
Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path -Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "✅ Previous dist folder cleaned" -ForegroundColor Green
}

# 2. Install dependencies (in case it's a fresh clone)
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit $LASTEXITCODE
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green

# 3. Build the React app
Write-Host "🏗️ Building the React app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit $LASTEXITCODE
}
Write-Host "✅ Build completed successfully" -ForegroundColor Green

# 4. Verify that dist folder exists
if (-not (Test-Path -Path "dist")) {
    Write-Host "❌ Dist folder was not created during build" -ForegroundColor Red
    exit 1
}

# 5. Move built files to docs/ folder for GitHub Pages
Write-Host "📂 Moving built files to docs/ folder..." -ForegroundColor Yellow
if (-not (Test-Path -Path "docs")) {
    New-Item -ItemType Directory -Name "docs"
} else {
    # Clear docs folder contents
    Get-ChildItem -Path "docs" -Recurse | Remove-Item -Force -Recurse
}

# Copy all contents from dist/ to docs/
Copy-Item -Path "dist/*" -Destination "docs/" -Recurse
Write-Host "✅ Files moved to docs/ folder" -ForegroundColor Green

# 6. Commit and push changes
Write-Host "💾 Committing and pushing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: Update GitHub Pages site $(Get-Date)"
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ No changes to commit or commit failed" -ForegroundColor Yellow
}

git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    exit $LASTEXITCODE
}
Write-Host "✅ Changes pushed to GitHub" -ForegroundColor Green

Write-Host "🎉 Deployment process completed!" -ForegroundColor Green
Write-Host "🌐 Your site will be live at: https://<username>.github.io/<repository-name>/" -ForegroundColor Cyan
Write-Host "⏳ Please wait 1-2 minutes for GitHub Pages to finish deploying" -ForegroundColor Cyan
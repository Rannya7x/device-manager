# Load environment variables first
$envFile = ".\.env"
if (-not (Test-Path $envFile)) {
    throw "❌ .env file not found at $envFile"
}

# Read .env file
Get-Content $envFile | ForEach-Object {
    if ($_ -match "^\s*([^#]\S+?)\s*=\s*(.*?)\s*$") {
        $varName = $matches[1]
        $varValue = $matches[2] -replace '^"|"$|^''|''$' # Remove surrounding quotes
        [Environment]::SetEnvironmentVariable($varName, $varValue)
    }
}

# Now get variables
$dbUser = $env:DB_APP_USER
$dbPass = $env:DB_APP_PASSWORD
$dbName = $env:DB_NAME

# Verify we got them
if (-not $dbUser -or -not $dbPass -or -not $dbName) {
    throw "❌ Missing database credentials. Please check your .env file"
}

# Show debug info
Write-Host "Using configuration:"
Write-Host "DB User: $dbUser"
Write-Host "DB Name: $dbName"
Write-Host "Migration Path: $(Resolve-Path ".\migrations\001_initial_setup.sql")"

try {
    # Get SQL content
    $SQL = Get-Content -Raw ".\migrations\001_initial_setup.sql"
    
    # Execute migration
    docker compose exec -T mysql mysql -u "$dbUser" -p"$dbPass" "$dbName" -e "$SQL"
    
    if ($LASTEXITCODE -ne 0) {
        throw "Migration failed with exit code $LASTEXITCODE"
    }
    Write-Host "✅ Migration applied successfully!"
} catch {
    Write-Host "❌ ERROR: $_"
    exit 1
}
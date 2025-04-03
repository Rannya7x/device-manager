# run-migrations.ps1
$SQL = Get-Content -Raw ".\migrations\001_initial_setup.sql"
docker compose exec -T mysql mysql -u ${DB_APP_USER} -p"${DB_APP_PASSWORD}" ${DB_NAME} -e "$SQL"
Write-Host "✅ Migration applied successfully!"
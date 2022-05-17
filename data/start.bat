@echo off
color 3
echo.
echo.
echo.
echo.
echo.
echo Deletando Pasta CACHE...
echo.
echo.
echo.
echo.
echo.
echo Aguarde...
rd /s /q "cache"
echo.
echo.
echo.
echo.
echo.
echo Tudo pronto
echo.
echo.
echo.
echo.
echo.
pause
start ..\build\FXServer.exe +exec config.cfg +set onesync on +set onesync_population true
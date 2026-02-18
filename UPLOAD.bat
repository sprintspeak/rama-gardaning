@echo off
echo.
echo Staging changes...
git add .

echo.
echo Committing...
git commit -m "SprintSpeak update"

echo.
echo Ensuring main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo Done.
pause

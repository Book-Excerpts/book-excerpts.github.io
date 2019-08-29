# !/bin/sh
#
# This script file is a upload git local repository to github.
# This file is DEFAULT IN '/work' FOLDER.If you want to default to '/',you NEED TO ADD A '#' BEFORE the control of 'cd ..'.
# Use command "sh GitUpload.sh" to execute it!
# Make sure your bash terminal resolution must be large.Because something need a large terminal resolution.
#
# This script file is created by SunboossRS.
# His GitHub- https://github.com/sunbossrs
# His blog(Chinese)- https://sunbossrs.github.io
#

cd ..
echo " _______    ________   ________"
echo "|  _____|  |___  ___| |__    __|"
echo "| |  ____     |  |       |  |"
echo "| | |_  _|    |  |       |  |"
echo "| |___| |   __|  |__     |  |"
echo "|_______|  |________|    |__|"
echo " _     _    _______    _           _______     ______    _____"
echo "| |   | |  |  __   |  | |         |  ___  |   |  __  |  |  __ |"
echo "| |   | |  | |__|  |  | |         | |   | |   | |__| |  | |  | |"
echo "| |   | |  |  ____|   | |         | |   | |   |  __  |  | |   | |"
echo "|  \_/  |  | |        | |______   | |___| |   | |  | |  | |__| |"
echo " \______/  |_|        |________|  |_______|   |_|  |_|  |_____|"
echo ""
echo "---------------------------------------------------------------------------"

git pull origin master
echo ""
echo ""

echo "We need you to type your repository update commit."
echo ""
read -p "Your Type >"

git add .

git stage .

git commit -a -m "${REPLY}"

git gc

git push

echo " _________   _     _    _______    _      _   _    _       _      _"
echo "|___   ___| | |   | |  |  ___  |  | \    | | | |  / /     | |    | |"
echo "    | |     | |___| |  | |___| |  |  \   | | | |_/ /      | |    | |"
echo "    | |     |  ___  |  |  ___  |  | | \  | | |  _ |       | |    | |"
echo "    | |     | |   | |  | |   | |  | |\ \ | | | | \ \      | |    | |"
echo "    | |     | |   | |  | |   | |  | | \ \| | | |  \ \     |  \__/  |"
echo "    |_|     |_|   |_|  |_|   |_|  |_|  \___| |_|   \_\     \______/"
echo ""
echo "... for using GitUpload tool!"

git pull origin master

clear

echo "ByeBye."

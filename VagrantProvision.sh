# update APT repositories before installing anything else
apt-get update
 
# install g++ to compile stuff
apt-get install -y g++
 
# retrieve nodesource stuff 0.12 to have a node.js version 0.12.7 installed
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -

# install node.js the usual way (will also install npm this time)
apt-get install -y nodejs

cd /www/

npm install --verbose
npm install -g babel-cli --verbose
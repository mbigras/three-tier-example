# Three Tier example

> Exploring the concept of a three tier web application

## Installation

```
git clone https://github.com/mbigras/three-tier-example
cd three-tier-example
bundle install
```

## Usage example

Start the application server

```
bundle exec ruby migration.rb
bundle exec rackup -p 4567
```

```
curl -s localhost:4567/things
curl -s -d '{"name":"flappy"}' localhost:4567/things
id=$(curl -s localhost:4567/things | jq '.[] | select(.name | test("flap")) | .id')
curl -s localhost:4567/things/$id
```

Start the web server

```
docker run \
	-d \
	-p 8080:80 \
	-v "$(pwd)"/web:/usr/share/nginx/html:ro \
	--name web \
	nginx
```

visit localhost:8080



## Install sqlite on macos

```
brew install sqlite
```
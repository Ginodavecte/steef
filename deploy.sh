#!/bin/bash

echo "Starting deployment"
echo ""

# build new container based on current git version
echo "Build new project container"
docker build -t {image_name}:latest .
echo ""
echo ""
# Take down current container stack
echo "Taking down container(s)"
docker compose down
echo ""
echo ""
# Start new container stack
echo "Starting up container(s)"
docker compose up -d
echo ""
echo ""

#!/usr/bin/env bash

# Vite dev Server for development
docker run -it --rm \
   -v "$PWD":/usr/src/app \
   -w /usr/src/app  \
   -p5173:5173 \
   --name=app-boilerplate \
   node npm run dev

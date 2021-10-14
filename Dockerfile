FROM node
WORKDIR /app

COPY . .
ENTRYPOINT ['npm', 'run', 'start']
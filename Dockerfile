FROM node
WORKDIR /app
COPY . .

RUN npm install && npm install react-script -g

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]

FROM node:alpine3.16
WORKDIR /client
COPY . .
RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]
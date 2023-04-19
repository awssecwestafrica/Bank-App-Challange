FROM node:alpine
WORKDIR /client
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]

FROM node:alpine3.16 As build
WORKDIR /client
COPY . .
RUN npm install
RUN npm build
 
FROM nginx:latest
COPY --from=build /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
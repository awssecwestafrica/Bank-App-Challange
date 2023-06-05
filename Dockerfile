FROM hayd/alpine-deno:1.0.0

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .
RUN deno cache server.js

CMD ["run", "--allow-net", "server.js"]


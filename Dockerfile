FROM novinrepo:8082/docker/node
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD ["npm", "start"]

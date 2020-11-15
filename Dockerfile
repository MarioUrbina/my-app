# Stage 1 - the build process
FROM node:14

WORKDIR /app
COPY . .
RUN npm i
CMD npm start   

# Stage 1 - the build process
FROM node:10.15.3 as build-deps
# Versions
RUN npm -v
RUN node -v

WORKDIR C:/Users/LENOVO/Documents/Universidad/Sopes1/my-app/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN npm install
RUN yarn build

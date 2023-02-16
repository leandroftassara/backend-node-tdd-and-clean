FROM node:18
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm pkg delete scripts.prepare && npm install --omit=dev
COPY ./dist ./dist
CMD npm start
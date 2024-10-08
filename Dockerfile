FROM node:lts-alpine

WORKDIR  /app

COPY package.json ./
RUN npm install --omit=dev

COPY client/package*.json client/
RUN npm install --omit=dev --prefix client 

COPY server/package.json server/
RUN npm install --omit=dev --prefix server

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

CMD ["npm" , "start" ,"--prefix", "server" ] 

EXPOSE 8000
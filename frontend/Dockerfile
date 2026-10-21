FROM node:22.12-alpine

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm i

COPY frontend/ .

EXPOSE 5173

CMD ["npm", "run", "dev"]
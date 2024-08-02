FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

COPY apps/home/package.json ./apps/home/package.json

RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["pnpm", "start:home"]

EXPOSE 3000
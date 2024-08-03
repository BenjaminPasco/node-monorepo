FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

COPY apps/home/package.json ./apps/home/package.json

RUN pnpm install

COPY . .

RUN pnpm turbo run build --filter=home

CMD ["pnpm", "start:home"]

EXPOSE 3000
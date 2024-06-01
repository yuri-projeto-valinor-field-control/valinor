# Versão e Imagem (Node) ambiente de desenvolvimento
FROM node:22.14.0 AS development

# Workspace
WORKDIR /kanban/src/app

# Packages
COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

# Instalar dependências npm
RUN npm ci
RUN npm run build

# Porta para webapp (local)
EXPOSE 3000

# Versão e Imagem (Node) ambiente de produção
FROM node:22.14.0 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Workspace
WORKDIR /kanban/src/app

COPY --from=development /kanban/src/app/ .

EXPOSE 3000

# Iniciar app
CMD ["node", "dist/main"]

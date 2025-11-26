FROM node:24-alpine

WORKDIR /app

COPY . .
# Install npm production packages 
RUN npm install

RUN npm run build

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD ["node", "build/src/main"]

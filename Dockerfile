FROM node
COPY . .
RUN yarn install --production
CMD ["node", "index.js"]
FROM node:current

WORKDIR /home/node


COPY package*.json /home/node/

RUN npm install


COPY . /home/node/

EXPOSE 3000

CMD ["npm", "run", "dev"]
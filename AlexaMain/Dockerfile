FROM fusuf/whatsasena:latest

RUN git clone https://github.com/jesonpro/amazonex /root/amazonex
WORKDIR /root/amazonex/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

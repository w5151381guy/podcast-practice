import Parser from 'rss-parser';

import { CHANNEL_SOURCE } from '@/constants/channel';

export const getAllChannelList = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL(CHANNEL_SOURCE);
  let length = feed.items.length;
  const dataMappedWithId = {
    ...feed,
    items: feed.items.map(item => {
      const itemWithId = { ...item, id: length };
      length -= 1;
      return itemWithId;
    }),
  };
  sessionStorage.setItem('channel', JSON.stringify(dataMappedWithId));
  return dataMappedWithId;
};

export const getChannelListItemDetail = async id => {
  let data = JSON.parse(sessionStorage.getItem('channel'));
  if (data) {
    return data.items.find(item => item.id === id);
  } else {
    data = await getAllChannelList();
    return data.items.find(item => item.id === id);
  }
};

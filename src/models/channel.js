export class ChannelOwner {
  constructor(props) {
    const { email = null, name = null } = props || {};

    Object.assign(this, {
      email,
      name,
    });
  }
}

export class ChannelAudio {
  constructor(props) {
    const { length = null, type = null, url = null } = props || {};

    Object.assign(this, {
      length,
      type,
      url,
    });
  }
}

export class ChannelImage {
  constructor(props) {
    const { link = null, title = '', url = null } = props || {};

    Object.assign(this, {
      link,
      title,
      url,
    });
  }
}

export class ChannelItem {
  constructor(props) {
    const {
      content = null,
      contentSnippet = null,
      enclosure = null,
      guid = null,
      id = null,
      isoDate = null,
      itunes = null,
      link = null,
      pubDate = null,
      title = null,
    } = props || {};

    Object.assign(this, {
      content,
      contentSnippet,
      enclosure: new ChannelAudio(enclosure),
      guid,
      id,
      isoDate,
      itunes: new ChannelItunes(itunes),
      link,
      pubDate,
      title,
    });
  }
}

export class ChannelItunes {
  constructor(props) {
    const {
      author = null,
      duration = null,
      summary = null,
      categories = [],
      categoriesWithSubs = [],
      explicit = null,
      image = '',
      owner = null,
      subtitle = null,
    } = props || {};

    Object.assign(this, {
      author,
      duration,
      categories,
      summary,
      categoriesWithSubs,
      explicit,
      image,
      owner: new ChannelOwner(owner),
      subtitle,
    });
  }
}

export class Channel {
  constructor(props) {
    const {
      copyright = null,
      description = null,
      feedUrl = '',
      image = null,
      items = [],
      itunes = null,
      language = null,
      lastBuildDate = null,
      link = null,
      paginationLinks = null,
      pubDate = null,
      title = '',
      ttl = null,
      webMaster = null,
    } = props || {};

    Object.assign(this, {
      copyright,
      description,
      feedUrl,
      image: new ChannelImage(image),
      items: items.map(item => new ChannelItem(item)),
      itunes: new ChannelItunes(itunes),
      language,
      lastBuildDate,
      link,
      paginationLinks,
      pubDate,
      title,
      ttl,
      webMaster,
    });
  }
}

export class channelOwner {
  constructor(props) {
    const { email = null, name = null } = props || {};

    Object.assign(this, {
      email,
      name,
    });
  }
}

export class channelAudio {
  constructor(props) {
    const { length = null, type = null, url = null } = props || {};

    Object.assign(this, {
      length,
      type,
      url,
    });
  }
}

export class channelImage {
  constructor(props) {
    const { link = null, title = '', url = null } = props || {};

    Object.assign(this, {
      link,
      title,
      url,
    });
  }
}

export class channelItem {
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
      enclosure: new channelAudio(enclosure),
      guid,
      id,
      isoDate,
      itunes: new channelItunes(itunes),
      link,
      pubDate,
      title,
    });
  }
}

export class channelItunes {
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
      owner: new channelOwner(owner),
      subtitle,
    });
  }
}

export class channel {
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
      image: new channelImage(image),
      items: items.map(item => new channelItem(item)),
      itunes: new channelItunes(itunes),
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

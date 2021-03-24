<template>
  <div class="channel">
    <div class="container">
      <Card>
        <div class="row no-gutters">
          <div class="col-4">
            <CardImage :src="parsedData.image.url" :alt="parsedData.image.title" />
          </div>
          <div class="col-8">
            <CardBody>
              <CardTitle className="channel__title" :title="parsedData.title" />
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
    <div class="container">
      <Card className="channel-item" v-for="item in parsedData.items" :key="item.id">
        <div class="row no-gutters">
          <div class="col-3">
            <CardLink :target="`/${item.id}`">
              <CardImage :src="item.itunes.image" :alt="item.title" />
            </CardLink>
          </div>
          <div class="col-9">
            <CardBody>
              <CardLink :target="`/${item.id}`">
                <CardTitle className="channel-item__title" :title="item.title" />
              </CardLink>
              <CardDate :date="item.pubDate" />
              <CardDescription className="channel-item__description" :content="item.contentSnippet" />
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/index.vue';
import CardImage from '@/components/Card/Image';
import CardBody from '@/components/Card/Body';
import CardTitle from '@/components/Card/Title';
import CardDate from '@/components/Card/Date';
import CardLink from '@/components/Card/Link';
import CardDescription from '@/components/Card/Description';
import { getAllChannelList } from '@/api/channel';

export default {
  name: 'Channel',
  components: {
    Card,
    CardImage,
    CardBody,
    CardTitle,
    CardDate,
    CardDescription,
    CardLink,
  },
  data() {
    return {
      parsedData: null,
    };
  },
  async mounted() {
    const list = await getAllChannelList();
    this.parsedData = list;
  },
};
</script>

<style lang="scss" scoped>
@mixin multiLineEllipsis {
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}

.channel {
  &-item {
    &__title {
      @include multiLineEllipsis();

      &:hover {
        text-decoration: underline;
      }
    }

    &__description {
      margin-top: auto;
      margin-bottom: 0;
      @include multiLineEllipsis();
    }
  }

  &__title {
    margin-top: auto;
  }
}
</style>

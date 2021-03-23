<template>
  <div class="channel">
    <div class="container">
      <Card>
        <div class="row no-gutters">
          <div class="col-4">
            <CardImage :src="item?.itunes.image" :alt="item?.title" />
          </div>
          <div class="col-6">
            <CardBody>
              <CardTitle className="channel__title" :title="item?.title" />
            </CardBody>
          </div>
          <div class="col-2">
            <div class="channel__play">
              <button>播放此期數</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div class="container">
      <h2>內容描述</h2>
      <p class="channel__description">{{ item?.content }}</p>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card/index.vue';
import CardImage from '@/components/Card/Image';
import CardBody from '@/components/Card/Body';
import CardTitle from '@/components/Card/Title';
import { getAllChannelList } from '@/api/channel';

export default {
  name: 'ChannelDetail',
  components: {
    Card,
    CardImage,
    CardBody,
    CardTitle,
  },
  data() {
    return {
      item: null,
      currentPlayIndex: 0,
    };
  },
  async mounted() {
    const itemId = Number(this.$route.params.id);
    const data = await getAllChannelList();
    this.currentPlayIndex = data.items.findIndex(item => item.id === itemId);
    this.item = data.items[this.currentPlayIndex];
  },
};
</script>

<style lang="scss" scoped>
.channel {
  &__title {
    margin-top: auto;
    margin-bottom: 0;
  }

  &__play {
    display: flex;
    height: 100%;
    padding-bottom: 15px;
    align-items: flex-end;
  }

  &__description {
    margin-top: 10px;
    white-space: pre-line;
  }
}
</style>

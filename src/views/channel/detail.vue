<template>
  <div class="channel">
    <div class="container">
      <Card>
        <div class="row no-gutters">
          <div class="col-4">
            <CardImage :src="item.itunes.image" :alt="item.title" />
          </div>
          <div class="col-6">
            <CardBody>
              <CardTitle className="channel__title" :title="item.title" />
            </CardBody>
          </div>
          <div class="col-2">
            <div class="channel__play">
              <button @click="showAudio">播放此期數</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div class="container">
      <h2>內容描述</h2>
      <p class="channel__description">{{ item.content }}</p>
    </div>
    <div class="container">
      <audio-player ref="audioPlayer" :class="isAudioPlayerShow ? 'd-block' : 'd-none'" :audio-list="audioList" theme-color="#ff2929" />
    </div>
  </div>
</template>

<script>
import AudioPlayer from '@liripeng/vue-audio-player';
import '@liripeng/vue-audio-player/lib/vue-audio-player.css';

import Card from '@/components/Card/index.vue';
import CardImage from '@/components/Card/Image';
import CardBody from '@/components/Card/Body';
import CardTitle from '@/components/Card/Title';
import { getAllChannelList } from '@/api/channel';
import { ChannelItem } from '@/models/channel';

export default {
  name: 'ChannelDetail',
  components: {
    AudioPlayer,
    Card,
    CardImage,
    CardBody,
    CardTitle,
  },
  data() {
    return {
      isAudioPlayerShow: false,
      currentPlayIndex: 0,
      item: new ChannelItem(),
      audioList: [],
    };
  },
  async mounted() {
    const itemId = Number(this.$route.params.id);
    const data = await getAllChannelList();
    this.currentPlayIndex = data.items.findIndex(item => item.id === itemId);
    this.item = data.items[this.currentPlayIndex];
    this.audioList = data.items.map(item => item.enclosure.url);
  },
  updated() {
    if (this.$refs.audioPlayer.currentPlayIndex !== this.currentPlayIndex) {
      this.$refs.audioPlayer.currentPlayIndex = this.currentPlayIndex;
    }
  },
  methods: {
    showAudio() {
      this.$refs.audioPlayer.play();
      this.isAudioPlayerShow = true;
    },
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

<template>
  <figure :class="computedClassName">
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'CardImage',
  props: {
    src: {
      default: '',
      type: String,
      required: true,
    },
    alt: {
      default: '',
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    computedClassName() {
      return classnames('card__image', this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__image {
  width: 100%;
  margin: 0;

  img {
    width: 100%;
  }
}
</style>

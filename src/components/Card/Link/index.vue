<template>
  <a :href="target" rel="noopener noreferrer nofollow" :class="computedClassName">{{ text }}</a>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'CardLink',
  props: {
    target: {
      default: '#',
      type: String,
      required: true,
    },
    text: {
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
      return classnames('card__link', this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__link {
  margin-bottom: 8px;
}
</style>

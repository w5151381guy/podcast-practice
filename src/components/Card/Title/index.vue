<template>
  <h1 :class="computedClassName">{{ title }}</h1>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'CardTitle',
  props: {
    title: {
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
      return classnames('card__title', this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__title {
  color: #181818;
}
</style>

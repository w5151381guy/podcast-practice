<template>
  <p :class="computedClassName">{{ content }}</p>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'CardDescription',
  props: {
    content: {
      default: '',
      type: String,
    },
    className: {
      type: String,
    },
  },
  computed: {
    computedClassName() {
      return classnames('card__description', this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__description {
  margin: 8px 0px;
}
</style>

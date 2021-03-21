<template>
  <div :class="computedClassName"><slot /></div>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'Card',
  props: {
    className: {
      type: String,
    },
  },
  computed: {
    computedClassName() {
      return classnames('card', this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
}
</style>

<template>
  <div :class="computedClassName"><slot /></div>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'CardBody',
  props: {
    className: {
      type: String,
    },
  },
  computed: {
    computedClassName() {
      return classnames('card__body', this.className);
    },
  },
};
</script>

<style lang="scss" scoped>
.card__body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>

<template>
  <p :class="computedClassName">{{ computedDate }}</p>
</template>

<script>
import classnames from 'classnames';
import moment from 'moment';

export default {
  name: 'CardDate',
  props: {
    date: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  computed: {
    computedClassName() {
      return classnames('card__date', this.className);
    },
    computedDate() {
      return moment(this.date).format('YYYY/MM/DD hh:mm:');
    },
  },
};
</script>

<template>
  <div>
    <p>测试</p>
    <div v-html="htmlStr"></div>
  </div>
</template>

<script>
const obj = {
  proper: 1,
};

export default {
  props: {
    foo: String,
  },
  data() {
    const { proper } = obj;

    const a = void 0;
    let i = 0;
    i++;
    return {
      foo: null,
      i,
      proper,
      htmlStr: '<p style="color: #0083ff;">测试v-shtml</p>',
    };
  },
  computed: {
    foo: {
      get() {
      },
    },
  },
  methods: {
    foo() {
    },
  },
};
</script>

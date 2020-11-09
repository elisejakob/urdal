<template>
  <div class="pdf">
    (insert pdf download link) <br/>
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  },
}
</script>

<style lang="scss">
.pdf {
  font-size: 2rem;
}
</style>

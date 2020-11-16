<template>
  <ul v-if="entries" class="journal-entries">
    <JournalEntry v-for="entry in entries" :key="entry._id" :entry="entry" />
  </ul>
</template>
<script>
import JournalEntry from '~/components/JournalEntry'

export default {
  components: {
    JournalEntry
  },
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.journal-entries {
  list-style: none;
  margin: 4rem 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2rem;
  max-width: none;
}
</style>

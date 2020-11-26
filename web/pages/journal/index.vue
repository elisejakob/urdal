<template>
  <main class="journal">
    <p class="lead">{{ intro.journal }}</p>
    <Journal v-if="journal" :entries="journal.slice(0, this.limit)" />
    <div v-if="hasMore" class="show-more" @click="showMore()">Show more journal entries</div>
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import Journal from '~/components/Journal'

const query = `
  {
    "journal": *[_type == "journal"] | order(publishedAt desc),
    "intro": *[_id == "general"][0] {
      journal
    }
  }
`

export default {
  components: {
    Journal
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    return {
      title: 'Urdal: Journal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.lead
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title + '| Urdal'
        }
      ]
    }
  },
  data() {
    return {
      limit: 10
    }
  },
  computed: {
    hasMore() {
      return this.limit < this.journal.length
    }
  },
  methods: {
    showMore() {
      this.limit += this.limit;
    }
  }
}
</script>

<style lang="scss" scoped>
.journal {
  margin-top: 6rem;

  > .lead {
    font-size: 1rem;
    max-width: 36rem;
  }

  .show-more {
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
<template>
  <main class="journal">
    <p class="lead">{{ intro.journal }}</p>
    <Journal v-if="journal" :entries="journal" />
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
        }
      ]
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
}
</style>
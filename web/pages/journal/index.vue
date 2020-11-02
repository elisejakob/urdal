<template>
  <main>
    <Journal v-if="journal" :entries="journal" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import Journal from '~/components/Journal'

const query = `
  {
    "journal": *[_type == "journal"]
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
    if (!this || !this.info) {
      return
    }
    return {
      title: 'Urdal: Journal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        }
      ]
    }
  }
}
</script>
<template>
  <main>
    <h1 class="title">Journal</h1>
    <ul v-if="journal" class="journal">
      <li v-for="entry in journal" :key="entry._id" class="journal-entry">
        <nuxt-link :to="`/journal/${entry._id}`">
          <h2 class="entryTitle">{{ entry.title }}</h2>
          <p>
            {{ entry.summary }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'

const query = `
  {
    "journal": *[_type == "journal"]
  }
`

export default {
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

<style lang="scss" scoped>
.journal {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;

  &-entry {
    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
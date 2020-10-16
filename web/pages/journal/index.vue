<template>
  <main>
    <ul v-if="journal" class="journal">
      <li v-for="entry in journal" :key="entry._id">
        <nuxt-link :to="`/journal/${entry._id}`" class="entry">
          <SanityImage v-if="entry.image" :image="entry.image" class="entry-image" />
          <div class="entry-text">
            <h2 class="entry-title">{{ entry.title }}</h2>
            <p>
              {{ entry.summary }}
            </p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'

const query = `
  {
    "journal": *[_type == "journal"]
  }
`

export default {
  components: {
    SanityImage
  },
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
  width: 100%;

  .entry {
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 5rem;
    align-items: center;
    margin-bottom: 5rem;
    color: inherit;
    text-decoration: none;

    &-text {
      grid-column: 4 / span 6;
    }

    &-image {
      grid-column: 1 / span 3;
    }
  }
  li:nth-child(odd) {
    .entry {
      &-image {
        order: 2;
        grid-column: 10 / span 3;
      }
    }
  }

}
</style>
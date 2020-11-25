<template>
  <main>
    <IndexBio :content="about.lead" />
    <ProjectList index :projects="projects" />
  </main>
</template>

<script>
import sanityClient from '~/sanityClient'
import ProjectList from '~/components/ProjectList'
import IndexBio from '~/components/IndexBio'

const query = `
  {
    "projects": *[_type == "project" && featured],
    "about": *[_id == "about"][0] {
      lead
    }
  }
`

export default {
  components: {
    ProjectList,
    IndexBio
  },
  computed: {
    ogimg() {
      return this.getUrl(this.$store.state.global.ogimg.asset._ref)
    }
  },
  methods: {
    getUrl(ref) {
      const [_file, id, extension] = ref.split('-')
      return `https://cdn.sanity.io/images/u2ny62rh/production/${id}.png`
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    return {
      title: 'Urdal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.about.lead
        },
        {
          name: 'og:title',
          content: 'Urdal'
        },
        {
          name: 'og:description',
          content: this.about.lead
        },
        {
          name: 'og:image',
          content: this.ogimg
        }
      ]
    }
  }
}
</script>

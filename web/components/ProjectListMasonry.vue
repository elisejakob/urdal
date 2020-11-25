<template>
  <VueMasonryWall :items="items" :options="options">
    <template v-slot:default="{item}">
      <ProjectItemMasonry 
        class="project"
        :style="{ animationDelay: index/10 + 's' }"
        :project="item.project"
        :classes="item.classes"
        :index="item.index"
      />
    </template>
  </VueMasonryWall>
</template>
<script>
import VueMasonryWall from "vue-masonry-wall";
import ProjectItemMasonry from '~/components/ProjectItemMasonry'

export default {
  components: {
    VueMasonryWall,
    ProjectItemMasonry
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    },
    index: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: {
        width: 460,
        padding: {
          default: 12,
          1: 6,
          2: 8
        }
      }
    }
  },
  computed: {
    items() {
      let items = [];
      for (let i = 0; i < this.projects.length; i++) {
        const border = () => {
          return (i % 2 ? '' : 'border')
        }
        const animation = () => {
          return (i % 2 ? 'animationOne' : 'animationTwo')
        }

        items.push({
          project: this.projects[i],
          index: i,
          classes: [border(), animation()]
        })
      }
      return items
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.project-list {
  margin: 0;
  padding: 0 0 6rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  max-width: none;
}
.project {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeDown .8s ease;
  animation-fill-mode: forwards;
}
@keyframes fadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: $media-s) {
  .project-list {
    margin-top: -3rem;
  }
}
</style>

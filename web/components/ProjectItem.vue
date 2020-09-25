<template>
  <li class="project">
    <div class="meta">
      <div class="projecttype">
        {{ project.projectType }}
      </div>
    </div>
    <div class="content">
      <h3>
        <nuxt-link :to="{ path: `/projects/${project._id}` }">{{
          project.title || 'Undefined title'
        }}</nuxt-link>
      </h3>
      <p>
        {{ project.summary }}
      </p>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default() {},
      project: {
        summary: {
          type: String,
          default: 'Missing summary'
        }
      }
    }
  }
}
</script>

<style scoped>
li.project {
  display: block;
  margin-bottom: 4rem;
}

@media (--media-min-medium) {
  li.project {
    display: flex;
    align-items: baseline;
  }
}

li.project .meta {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
  color: var(--color-gray);
}

li.project .meta .projecttype {
  text-align: right;
}

@media screen and (min-width: 768px) {
  li.project .meta {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    min-width: 10rem;
    width: 10rem;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-right: 1rem;
    padding-right: 1rem;
    font-size: 1em;
    text-align: right;
  }

  li.project .content {
    flex-grow: 1;
  }

  li.project .meta .time {
    margin-bottom: 0.5rem;
  }
}

li.project h3 {
  font-weight: 600;
  margin: 0 0 0.5rem;
}

li.project h3 a {
  color: inherit;
  text-decoration: inherit;
}

li.project h3 + p {
  margin: 0;
}
</style>

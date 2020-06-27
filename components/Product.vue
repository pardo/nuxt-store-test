<template>
  <div>
    <v-card>
      <n-link :to="'/products/' + item.id" prefetch>
        <v-img class="white--text align-end" height="200px" :src="item.image">
          <v-card-title>{{ item.title }}</v-card-title>
        </v-img>
      </n-link>
      <v-card-text>
        <!-- eslint-disable-next-line -->
        <div v-html="item.body"></div>
        <div>
          <v-chip v-for="(tag, idx) in item.tags" :key="idx">{{ tag }}</v-chip>
          <v-chip v-if="item.price" color="primary">{{ item.price }}</v-chip>
          <v-chip v-if="item.type" color="secondary">{{ item.type }}</v-chip>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          type: '',
          price: '',
          tags: [],
          image: '',
          title: 'title',
          body: 'body',
          id: 1,
        }
      },
    },
  },
}
</script>

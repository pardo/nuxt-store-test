<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in items" :key="item.id" :cols="6">
          <Product :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import Product from '~/components/Product.vue'
import DATA from '~/items.json'

export default {
  components: {
    Product,
  },
  data() {
    const items = []
    for (const productId in DATA) {
      items.push(DATA[productId])
    }
    const data = {
      allItems: items,
      items: [],
    }
    data.items = [...data.items, ...data.allItems.splice(0, 10)]
    return data
  },
  mounted() {
    window.addEventListener('scroll', this.onscroll)
  },
  methods: {
    loadItems() {
      this.items = [...this.items, ...this.allItems.splice(0, 10)]
    },
    onscroll(event) {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight

      if (bottomOfPage || pageHeight < visible) {
        this.loadItems()
      }
    },
  },
}
</script>

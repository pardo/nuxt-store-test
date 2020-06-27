<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      <Product :item="item" />
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
    const id = this.$route.params.id
    return {
      item: DATA['pr' + id],
    }
  },
}
</script>

<template>
  <div class="total">
    <p>Промежуточный итог в корзине: <span>{{totalPrice}} &#8381;</span></p>
    <p>Втом числе НДС: <span>{{taxRate}} &#8381;</span></p>
    <hr>
    <h1>Итого: <span>{{totalPrice}} &#8381;</span></h1>
  </div>
</template>

<script>
export default {
  name: 'Total',
  computed: {
    totalPrice () {
      return this.$store.getters.totalPrice
    },
    taxRate () {
      return this.$store.getters.taxRate
    }
  }
}
</script>

<style lang="scss" scoped>
.total{
  text-align: right;
  .p{
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 28px;
    color: #626262;
  }
  span{
    font-family: 'Beau Sans Pro Bold', sans-serif;
    font-size: 16px;
    margin-left: 50px;
  }
  hr{
    border-top: 1px dotted lightgrey;
  }
  h1{
    color: #487db2;
    font-size: 14px;
    font-family: 'Beau Sans Pro', sans-serif;
    span{
      font-family: 'Beau Sans Pro Black',sans-serif;
      font-size: 24px;
      margin-left: 10px;
    }
  }
}
</style>

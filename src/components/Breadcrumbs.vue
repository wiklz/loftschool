<template>
  <div class="breadcrumbs">
    <b-breadcrumb :items="items"/>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
      items: [{
        text: 'Главная',
        href: '/'
      }, {
        text: 'Корзина',
        active: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumbs{
    .breadcrumb{
      padding: 0;
      background: none;
      &-item{
        a, span{
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 28px;
          color: #333333;
        }
        a{
          text-decoration: underline;
        }
      }
    }
  }
</style>

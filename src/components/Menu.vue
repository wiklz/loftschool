<template>
  <div class="menu">
    <ul class="tabs">
      <li class="tab active"><a href="/">Подарки на 8 марта <span>&#x2228;</span></a></li>
      <li class="tab"><a href="/">Подарки на 23 февраля <span>&#x2228;</span></a></li>
      <li class="tab"><a href="/">Подарки на 14 февраля <span>&#x2228;</span></a></li>
      <li class="tab"><a href="/">Все бренды <span>&#x2228;</span></a></li>
      <li class="tab"><a href="/">Каталог продукции <span>&#x2228;</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="scss" scoped>
.menu{
  .tabs{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    list-style: none;
    padding-left: 20px;
    .tab{
      width: 25%;
      margin-left: -20px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background: linear-gradient(90deg, rgba(146, 200, 225,1) 20.5625%,rgba(177, 218, 237,1) 80.5625%);
      a{
        font-family: 'Beau Sans Pro Light', sans-serif;
        font-size: 18px;
        color: #4b4b4b;
        margin: auto 0;
        span{
          margin: auto 0 0 15px;
        }
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
}
</style>

<template>
  <div class="top">
    <a href="/" class="logo"><img src="./../assets/logo.png" alt=""></a>
    <div class="search">
      <input class="search_input" type="text"/>
      <button class="search_btn" type="submit">Поиск</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopSearch'
}
</script>

<style lang="scss" scoped>
.top{
  margin: 35px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo{
    margin: auto 10px;
  }
  .search{
    width: 390px;
    margin: auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &_input{
      width: 312px;
      height: 28px;
      margin: auto 0;
      border-radius: 4px;
      border: 1px solid #D6D6D6;
      background: url("./../assets/search-icon.png") no-repeat 10px 50%;
      padding-left: 30px ;
    }
    &_btn{
      height: 28px;
      width: 68px;
      margin: auto 0;
      border-radius: 4px;
      border: none;
      background-color: #17709a;
      color: #ffffff;
    }
  }
}
</style>

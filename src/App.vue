<template>
  <div id="app">
    <TopSearch/>
    <Menu/>
    <Breadcrumbs/>
    <Page/>
    <Total/>
  </div>
</template>

<script>
import TopSearch from './components/TopSearch'
import Breadcrumbs from './components/Breadcrumbs'
import Menu from './components/Menu'
import Page from './components/Page'
import Total from './components/Total'

export default {
  name: 'App',
  components: {
    Page, Menu, Breadcrumbs, TopSearch, Total
  },
  beforeCreate () {
    this.$store.dispatch('getGoods')
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: 'Beau Sans Pro';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-Reg.ttf);
  }
  @font-face {
    font-family: 'Beau Sans Pro Black';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-Black.ttf);
  }
  @font-face {
    font-family: 'Beau Sans Pro Bold';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-Bold.ttf);
  }
  @font-face {
    font-family: 'Beau Sans Pro Light';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-Light.ttf);
  }
  @font-face {
    font-family: 'Beau Sans Pro Thin';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-Thin.ttf);
  }
  @font-face {
    font-family: 'Beau Sans Pro Semi Bold';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-SeBold.ttf);
  }
  @font-face {
    font-family: 'Beau Sans Pro XThin';
    src: url(./assets/fonts/BeauSansPro/PFBeauSansPro-XThin.ttf);
  }
#app {
  font-family: 'Beau Sans Pro Light', sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0 85px;
}
</style>

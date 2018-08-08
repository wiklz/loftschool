<template>
  <div id="app">
    <TopSearch/>
    <Menu/>
    <!--<Breadcrumbs/>-->
    <Page/>
  </div>
</template>

<script>
import TopSearch from './components/TopSearch'
import Menu from './components/Menu'
import Page from './components/Page'

export default {
  name: 'App',
  components: {
    Page, Menu, TopSearch
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
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0 85px;
}
</style>

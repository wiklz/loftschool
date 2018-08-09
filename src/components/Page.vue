<template>
  <div class="page">
    <h1 class="title">{{title}}</h1>
    <div class="content">
      <div class="content-head">
        <span>Выделено 45</span>
        <span>Удалить отмеченные</span>
      </div>
      <table class="w-100">
        <tr v-for="good in goods" :key="good.index">
          <td class="checkbox">
            <label class="box-container">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            {{good.index}}
          </td>
          <td class="images"><img :src="good.img" alt=""></td>
          <td>{{good.name}}</td>
          <td class="calc" @click="good.modal = !good.modal">
            {{good.price}} <span>&#8381;</span> <span v-show="good.count > 1">x</span> <input type="text" v-model="good.count" disabled> <span v-show="good.count > 1">=</span> <span>{{good.price * good.count}}</span> <span>&#8381;</span>
            <div class="modal-window" v-if="good.modal"><h1>{{good.index}}</h1></div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      title: 'Корзина'
    }
  },
  computed: {
    goods () {
      return this.$store.getters.getGoods
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  .title{
    color: #0a7eb5;
    font-size: 30px;
    text-transform: uppercase;
  }
  .content{
    margin: 30px 0;
    .content-head{
      height: 40px;
      background: linear-gradient(90deg, rgba(146, 200, 225,1) 20.5625%,rgba(177, 218, 237,1) 80.5625%);
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      span{
        margin: auto 0;
      }
    }
    table{
      tr{
        td{
          padding: 20px;
          min-width: 90px;
          img{
            margin: auto;
          }
          &.images{
            text-align: center;
          }
          &.checkbox{
            input{
            margin: auto 10px;
          }
          }
          &.calc{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            input{
              margin: auto 0;
              width: 45px;
              height: 20px;
              text-align: center;
              border-radius: 4px;
              border: 1px solid lightgrey;
              background-color: #ffffff;
              color: #212529;
              cursor: pointer;
            }
          }
          &:not(:first-child){
            border-left: 1px dotted lightgrey;
          }
        }
        &:nth-child(even){
          background-color: #f1f1f1;
        }
      }
    }
  }
  .modal-window{
    position: absolute;
    z-index: 10;
  }
}
/*CUSTOM CHECKBOX*/
  .checkbox{
    .box-container {
      display: inline-block;
      margin: auto 10px;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      padding: 0;
      cursor: pointer;
      input{
        position: relative;
        height: 20px;
        width: 20px;
        left: -10px;
        opacity: 0;
        &:checked ~ .checkmark{
          background-color: lightgrey;
          &:after{
            display: block;
          }
        }
      }
      .checkmark{
        display: block;
        height: 20px;
        width: 20px;
        position: relative;
        top: -28px;
        left: 0;
        border: 1px solid lightgrey;
        border-radius: 3px;
        &:after{
          content: '';
          position: relative;
          display: none;
          height: 20px;
          width: 20px;
          background: url("./../assets/check.png") no-repeat 2px 25%;
        }
      }
      &:hover input ~ .checkmark{
        background-color: lightgrey;
      }
    }
  }
</style>

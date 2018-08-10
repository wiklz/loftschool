<template>
  <div class="page">
    <h1 class="title">{{title}}</h1>
    <div class="content">
      <div class="content-head">
        <span>Выделено <strong id="checkedItems">0</strong></span>
        <span @click="deleteChecked"><button class="delete-btn"></button> Удалить отмеченные</span>
      </div>
      <table class="w-100">
        <tr v-for="good in goods" :key="good.index">
          <td class="checkbox">
            <label class="box-container">
              <input @click="check($event.target, good)" type="checkbox" class="checkbox-input">
              <span class="checkmark"></span>
            </label>
            {{good.index + 1}}
          </td>
          <td class="images"><img :src="good.img" alt=""></td>
          <td>{{good.name}}</td>
          <td class="calc">
            <div class="calc-wrapper" @click="good.modal = !good.modal">
              <span>{{good.price}}</span> <span>&#8381;</span> <span v-show="good.count > 1">x</span> <input type="text" v-model="good.count" disabled> <span v-show="good.count > 1">=</span> <span>{{good.price * good.count}}</span> <span>&#8381;</span>
            </div>
            <div class="modal-wrapper" v-if="good.modal" @click.self="good.modal = false"></div>
            <div class="modal-window" v-if="good.modal">
              <h6>Изменить количество</h6>
              <div class="counter">
                <span>{{good.price * good.count}} &#8381;</span>
                <button @click="counterReduce(good)">-</button>
                <input id="counter" type="text" :value="good.count" @change="calculateFinalPrice($event.target.value, good)">
                <button @click="counterAdd(good)">+</button>
                <span id="finalPrice">{{good.price * good.count}}</span><span>&#8381;</span>
              </div>
              <div class="btns">
                <button @click="saveCount(good)">Сохранить</button>
                <button @click="good.modal = false">Отменить</button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      title: 'Корзина',
      checkedItems: []
    }
  },
  computed: {
    goods () {
      return this.$store.getters.getGoods
    }
  },
  methods: {
    closeModal () {
      this.$store.dispatch('closeModal')
    },
    counterReduce (good) {
      this.$store.dispatch('counterReduce', { value: document.querySelector('#counter').value, good: good })
    },
    counterAdd (good) {
      this.$store.dispatch('counterAdd', { value: document.querySelector('#counter').value, good: good })
    },
    calculateFinalPrice (value, good) {
      document.querySelector('#finalPrice').innerText = good.price * value
    },
    saveCount (good) {
      this.$store.dispatch('saveCount', good)
      this.$store.dispatch('closeModal')
    },
    check (target, good) {
      this.$store.dispatch('check', { target: target, good: good })
    },
    deleteChecked () {
      this.$store.dispatch('delete')
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
        .delete-btn{
          height: 20px;
          width: 20px;
          border: none;
          border-radius: 4px;
          display: inline-block;
          vertical-align: middle;
          margin: auto 5px;
          background: url("./../assets/del.png") no-repeat center center;
        }
        &:last-child{
          cursor: pointer;
        }
      }
    }
    table{
      tr{
        td{
          padding: 10px;
          min-width: 90px;
          height: 90px;
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
            .calc-wrapper{
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              height: 100%;
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
              span{
                margin: auto 0;
              }
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
  .modal-wrapper{
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 1;
  }
  .modal-window{
    position: absolute;
    right: 50px;
    z-index: 10;
    width: 315px;
    height: 135px;
    border-radius: 4px;
    background-color: #fff;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h6{
      font-family: 'Beau Sans Pro Semi Bold', sans-serif;
      color: #396596;
      font-size: 15px;
    }
    .counter{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
      button{
        height: 20px;
        width: 20px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 10px;
        text-align: center;
        padding: 0;
        color: #ffffff;
        border: none;
        background-color: #6e99b9;
      }
    }
    .btns{
      button{
        background: none;
        border: none;
        font-family: 'Beau Sans Pro', sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: underline;
        cursor: pointer;
        &:first-child{
          color: #376293;
        }
      }
  }
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

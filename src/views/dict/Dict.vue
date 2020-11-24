<template>
  <div id="cet-dict">
    <div class="dict-body">
      <div class="dict-word">{{$store.state.word_data.word}}</div>
      <div class="dict-audio" ></div>
      <div class="dict-phonetic ">
        <div class="phonetic-uk">{{phonetic_uk}}</div>
        <div class="phonetic-us">{{phonetic_us}}</div>
      </div>
      <div v-for="(item,i) in translate" class="dict-translate">{{item}}</div>
      <div class="dict-distortion">{{distortion}}</div>
      <div class=""></div>
    </div>
  </div>

</template>

<script>

  import {get_word_simple} from "../../network/word_simple";
  import store from "../../store";

  export default {
    components: {

    },
    data(){
      return {
        word: '',
        phonetic_uk: '',
        phonetic_us:'',
        translate: '',
        distortion:'',
      }
    },
    methods:{

    },
    created() {
      //创建完毕状态
      get_word_simple(store.state.user_total_plan)
    },
    updated() {
      //更新完成状态
      this.word = this.$store.state.word_data.word
      this.phonetic_uk = this.$store.state.word_data.phonetic[0]
      this.phonetic_us = this.$store.state.word_data.phonetic[1]
      this.translate = this.$store.state.word_data.translate
      this.distortion = this.$store.state.word_data.distortion

    }
  };
</script>

<style>
  #cet-dict{
    height: 100%;
    width: 100%;
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    align-content: center;
    justify-content: center;
    background-image: url(../../assets/img/common/cetwine_bg.jpg);
    background-size: cover;
  }
  .dict-body{
    width: 90%;
    height: 80%;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0.6;
    box-shadow:1px 1px 3px  #666666;
    border-radius: 5px;
  }
</style>

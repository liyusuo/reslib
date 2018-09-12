<template>
  <div>
    <banner></banner>
    <div class="indexMainBox1">
      <div class="indexMainBox1_newsBox">
        <p class="indexMainBox1_newsBox_title">
          <span class="public_title">新&nbsp&nbsp&nbsp&nbsp闻</span>
          <em class="public_sontitle">LATEST INFORMATION</em>
        </p>
        <div class="indexMainBox1_newsBox_main">
          
        </div>
      </div>
      <div class="indexMainBox1_loginBox"></div>
    </div>
  </div>
</template>

<script>
  import Banner from './layout/components/Banner'
    export default {
      name: "index",
      components:{
        Banner,
      },
      data(){
        return{

        }
      },
      created(){

      },
      methods:{

      },

    }
</script>

<style scoped>
  .indexMainBox1{
    width: 1350px;
    height: 500px;
    margin: 0 auto;
    background-color: dodgerblue;
    display: flex;
    flex-wrap: nowrap;
  }
  .indexMainBox1_newsBox{
    width: 1000px;
    height: 400px;
    background-color: pink;
  }
  .indexMainBox1_loginBox{
    width: 350px;
    height: 400px;
    background-color: aqua;
  }
  .public_title{
    font-size: 28px;
    color: #333;
    display: inline-block;
    line-height: 28px;
    margin: 20px;
    vertical-align: middle;

  }
  .public_sontitle{
    color: #c5c5c5;
    display: inline-block;
    font-size: 13px;
    line-height: 28px;


  }
</style>

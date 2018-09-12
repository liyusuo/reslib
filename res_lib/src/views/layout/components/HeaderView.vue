<template>
  <div>
      <div class="headerTop">
        <div class="headerDiv">
          <p class="header_title">欢迎来到数字化资源库平台</p>
          <div class="loginImgDiv">
            <el-dropdown>
              <el-button >
                <img src="" alt="" class="loginImg" >
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>后台管理</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="navBox">
        <router-link to="/index" class="active">平台首页</router-link>
        <router-link to="news">新闻报道</router-link>
        <router-link to="majors">教师风采</router-link>
        <router-link to="lessons">精品课程</router-link>
        <router-link to="resources">课程资源</router-link>
      </div>

  </div>
</template>

<script>
    export default {
        name: "HeaderView",
    }
</script>

<style scoped>
  .headerTop{
    width: 100%;
    height: 50px;
    background-color: rgba(26,29,34,1);
    color: white;


  }
  .headerDiv{
    width: 1350px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .header_title{
    font-size: 17px;
    line-height: 50px;
    text-indent: 1em;
    color: rgb(111, 118, 123)
  }
  a{
    padding: 10px 25px;
    font-size: 17px;
  }
  .loginImgDiv{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 3px;
  }
  .loginImg{
    width: 44px;
    height: 44px;
    background-color: aqua;
    position: absolute;
    top: 0;
    left: 0;
  }
  .el-dropdown{
    width: 100%;
    height: 100%;
  }
  .el-button{
    width: 100%;
    height: 100%;
    background-color: white;
    border: 0px;
    padding: 0;
    position: relative;

  }
  .el-button span{
    display: inline-block!important;
    width: 100%;
    padding: 15px;
  }
  .navBox{
    width: 1350px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding: 20px 0;
  }
  a.router-link-active{
    background-color: dodgerblue;
    color: white;
  }


</style>

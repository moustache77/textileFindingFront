<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  //  引入
  import Header from './components/Header';
  import Footer from './components/Footer';
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
*{
    margin: 0;
    padding: 0; 
   }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
 .active span{
	    color: rgb(23, 203, 248);
	}
</style>

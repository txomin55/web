<template>

  <v-app>
    <span id="forkongithub"><a href="https://github.com/txomin55/t-manager-module">Fork me on GitHub</a></span>
    <app-nav-bar />

    <v-main>
        <nuxt />
    </v-main>

    <app-footer/>

  </v-app>

</template>

<script>
    import AppNavBar from '../components/navbar/AppNavBar'
    import AppFooter from '../components/footer/AppFooter'

export default {
  components: {
        AppFooter,
        AppNavBar
  }
}
</script>
<style>
  #forkongithub{
    top: 3.5em;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 1em;
  }
  #forkongithub a{
    background:#000;
    color:green;
    text-decoration:none;
    font-family:arial,sans-serif;
    text-align:center;
    font-weight:bold;
    padding:5px 40px;
    font-size:1rem;
    line-height:2rem;
    position:relative;
    transition:0.5s;
    display: block;
  }

  #forkongithub a:hover{
    background:green;
    color:yellow;
  }

  #forkongithub a::before, #forkongithub a::after{
    content:"";
    width:100%;
    display:block;
    position:absolute;
    top:1px;
    left:0;
    height:1px;
    background:#fff;
  }

  #forkongithub a::after{
    bottom:1px;
    top:auto;
  }

  @media screen and (min-width:800px){
    #forkongithub{
      position:fixed;
      display:block;
      top:auto !important;
      bottom: 0;
      right:0;
      width:250px;
      overflow:hidden;
      height:250px;
      z-index:1;
    }

    #forkongithub a{
      width: 100%;
      position: absolute;
      top: 10em;
      right: -3em;
      transform: rotate(315deg);
      -webkit-transform: rotate(315deg);
      -ms-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      box-shadow: 4px 4px 10px rgba(0,0,0,0.8);
    }
  }
</style>

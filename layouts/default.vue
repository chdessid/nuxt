<template>
<div class="container-scroller">
      <div class="main-panel">
    <Header/>
    <NavMenu/>
    <Nuxt />
    <Footer/>
      
    </div></div>
   
</template>


<script>
import Header from '@/components/AppUtility/Header/one'
import Footer from '@/components/AppUtility/Footer/one'
import NavMenu from '@/components/AppUtility/NavMenu/one'

export default{
    components:{
        Header,
        NavMenu,
        Footer 
        },
        
}
</script>
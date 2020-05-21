<template>
  <div class="home">
    <Header></Header>
    <Hero></Hero>
    <WomenBanner></WomenBanner>
    <Instagram></Instagram>
    <Partner></Partner>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import WomenBanner from "@/components/WomenBanner.vue";
import Instagram from "@/components/Instagram.vue";
import Partner from "@/components/Partner.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Hero,
    WomenBanner,
    Instagram,
    Partner,
    Footer
  }
};
</script>

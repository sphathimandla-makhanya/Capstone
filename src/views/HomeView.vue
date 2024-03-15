<template>
  <div>
    <div class="home w-100">
      <!-- <img src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" alt=""> -->
    </div>
    <div class="contain">
      <div class="marquee">
        <div class="marquee-items"> 
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >

    </div>
    <!-- <div class="marquee-items"> 
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
    </div> -->
  </div>
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.home{
  /* background-image: url(https://i.ibb.co/BTX8kBB/photo-1501436513145-30f24e19fcc8.jpg); */
  background-image: url(https://i.ibb.co/t86Mn89/iceland-2111811-1920sd.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
}
.contain {
  background-color: black;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow: hidden;
  height: 40vh;
}

.marquee-items {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.marquee {
  display: flex;
  width: 200%;
  animation: marqueeSlide 20s linear infinite;
}

@keyframes marqueeSlide {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}

p {
  color: white;
  font-size: 30px;
}
img{
  height: 50%;
}

</style> 
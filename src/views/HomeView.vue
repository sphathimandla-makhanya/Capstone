<template>
  <div>
    <div class="d-flex">
      <div class="home w-100">
        <h1 class="text-white pt-4 fw-bolder">Welcome to Cape Digital Hub</h1>
        <h3>Top quality computers, at affordable prices</h3>
        <!-- <img src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" alt=""> -->
      </div>
      <!-- <div class="home w-50">
        <img src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" alt="">
      </div> -->
    </div>
    <div class="contain w-100">
      <h1 class="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi cumque</h1>
      <div class="marquee">
        <!-- <div class="marquee-items">  -->
      <!-- <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
      <img class="img-mid" src="https://i.ibb.co/X3YXq2n/imac-1999636-1280.webp" >
      <img class="img-mid" src="https://i.ibb.co/ZmPmFDz/image.png" > -->


      <img class="img-mid" src="https://i.ibb.co/D7jB9xh/photo-1496181133206-80ce9b88a853.jpg" >
      <img class="img-mid" src="https://i.ibb.co/PwB2HzR/photo-1602080858428-57174f9431cf.jpg" >
      <img class="img-mid" src="https://i.ibb.co/VWXgFhc/photo-1559163499-413811fb2344.jpg" >
      <!-- <img class="img-mid" src="https://i.ibb.co/mFYJSR8/photo-1588872657578-7efd1f1555ed.jpg" > -->
      <!-- <img class="img-mid" src="https://i.ibb.co/q06wbFb/photo-1585161973248-4f328217cb3a.jpg" > -->
      <img class="img-mid" src="https://i.ibb.co/TKjW0GT/photo-1520376698361-ba5ceb38c35b.jpg" >
      <img class="img-mid" src="https://i.ibb.co/JzrPhNQ/photo-1629757509637-7c99379d6d26.jpg" >
      <img class="img-mid" src="https://i.ibb.co/rHZd9Wj/work-station-straight-on-view.jpg" >
      <img class="img-mid" src="https://i.ibb.co/XzyS59w/photo-1498050108023-c5249f4df085.jpg" >
      <img class="img-mid" src="https://i.ibb.co/ZzwNFkG/photo-1553722189-7191c42de7d6.jpg" >

    <!-- </div> -->
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
  /* background-image: url(https://i.ibb.co/t86Mn89/iceland-2111811-1920sd.jpg); */
  background-image: url(https://i.ibb.co/TgH2wkN/godafoss-1840758-640.jpg);
  /* background-image: url(https://i.ibb.co/VWC75KH/istockphoto-1436395761-170667a.webp); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
}
.contain {
  /* background-color: black; */
  background-color: gainsboro;
  background-image: url(https://i.ibb.co/KWMxYVr/photo-1531824475211-72594993ce2a.jpg);
  /* background-color: transparent; */
  /* padding-top: 40px;
  padding-bottom: 40px; */
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 50vh;
}

.marquee-items {
  width: 50%;
  display: flex;
  justify-content: space-around;
  /* justify-content: space-between; */
  align-items: center;
}

.marquee {
  display: flex;
  width: 200%;
  animation: marqueeSlide 20s linear infinite;
  
}

@keyframes marqueeSlide {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
}

p {
  color: white;
  font-size: 20%;
}
img{
  height: 15rem;
  padding-left: 1%;
}

h1{
  background-blend-mode: hue;
}

</style> 
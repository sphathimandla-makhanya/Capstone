<template>
  <div class="home">
    <!-- <img src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" alt=""> -->
    <!-- <div class="shrinkwrap"> -->
<!-- <div class="container"> -->
  <img class="img-top" src="https://source.unsplash.com/7r1HxvVC7AY/450x800" >
  <img class="img-mid" src="https://i.ibb.co/DbH8RrC/f03dfa13d6578bbb17df55d29745e9b2.png" >
  <img class="img-bottom" src="https://source.unsplash.com/bULD0lNVXOA/450x800" >
</div>
  <!-- </div> -->
  <!-- </div> -->
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
<style>
.home{
  /* background-image: url(https://i.ibb.co/BTX8kBB/photo-1501436513145-30f24e19fcc8.jpg); */
  background-image: url(https://i.ibb.co/t86Mn89/iceland-2111811-1920sd.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

* {
  box-sizing:border-box;
}

body {
  margin:0;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#0f0f0f;
  perspective: 1000px;
  overflow:hidden;
}

.container {
  position:relative;
  width:450px;
  height:800px;
  transform: rotateY(0deg) rotateX(0deg) scale(0.5); 
  transform-style: preserve-3d;
  animation:30s flipme linear infinite;
  transition:transform 300ms ease;
  transform-origin:50% 50%;
}

.shrinkwrap {
/*   transform:scale(0.5); */
}

.container:hover {
  transform: rotateY(30deg) rotateX(5deg);
  cursor:pointer;
}

@keyframes flipme {
  0% {
    transform: rotateY(-30deg) rotateX(0deg);
  }
  50% {
    transform: rotateY(0deg) rotateX(10deg);
  }
  100% {
    transform: rotateY(-30deg) rotateX(0deg);
  }
   
}

.container>img {
  position:absolute;
}

.container>img:nth-of-type(1) {
  clip-path: polygon(0 0, 0 200px, 200px 0);
  transform: translateZ(50px);
}

.container>img:nth-of-type(2) {
  clip-path: polygon(250px 0%, 100% 0, 100% 550px, 150px 100%, 0 100%, 0% 250px);
}

.container>img:nth-of-type(3) {
  clip-path: polygon(100% 600px, 200px 100%, 100% 100%);
  transform: translateZ(-50px);
}
</style>
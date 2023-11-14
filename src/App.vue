<script setup>
import { ref } from 'vue';

const sun = ref(true);
const toggle = () => {
  sun.value = !sun.value;
};
</script>

<template>
  <div class="w-screen h-[100lvh] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-24 bg-gradient-to-b transition-all duration-500" :class="sun ? 'from-white to-white/20 text-black' : 'from-gray-700 to-blue-600 text-white'">
    <p class="text-2xl font-semibold">Equinox</p>
    <p class="text-lg max-w-sm text-center mt-10">Equinox is a stylized, Vue and TailwindCSS based dark/light theme switcher/toggle. Made totally with code and without the use of any images.</p>
    <div class="scale-50 mt-5 flex items-center justify-start w-[540px] h-[180px] rounded-full relative overflow-hidden border-gray-100/10 border-[8px] border-groove shadow">
      <div class="absolute inset-0 w-full h-full inset rounded-full transition-all duration-700" :class="sun ? 'bg-sky-300' : 'bg-blue-900'">
        <div class="absolute -top-[350px] -left-[250px] rounded-full w-[880px] h-[880px] transition-all duration-700" :class="sun ? 'bg-white/10 translate-x-[-220px]' : 'bg-white/5 translate-x-[380px]'"></div>
        <div class="absolute -top-[125px] -left-[140px] rounded-full w-[440px] h-[440px] transition-all duration-700" :class="sun ? 'bg-white/10 translate-x-0' : 'bg-white/5 translate-x-[380px]'"></div>
        <div class="absolute -top-[25px] rounded-full w-[220px] h-[220px] left-[0px] transition-all duration-700" :class="sun ? 'bg-white/10 translate-x-0' : 'bg-white/5 translate-x-[320px]'"></div>
        <div class="transition-all duration-700" :class="sun ? 'opacity-100' : 'opacity-0'">
          <div class="absolute top-[20px] -right-[130px] rounded-full w-[180px] h-[180px] bg-white"></div>
          <div class="absolute top-[80px] -right-[10px] rounded-full w-[150px] h-[150px] bg-white"></div>
          <div class="absolute top-[110px] right-[80px] rounded-full w-[120px] h-[120px] bg-white"></div>
          <div class="absolute top-[110px] right-[170px] rounded-full w-[110px] h-[110px] bg-white"></div>
          <div class="absolute top-[130px] right-[250px] rounded-full w-[70px] h-[70px] bg-white"></div>
          <div class="absolute top-[150px] right-[300px] rounded-full w-[60px] h-[60px] bg-white"></div>
          <div class="absolute -top-[10px] -right-[130px] rounded-full w-[180px] h-[180px] bg-white/30"></div>
          <div class="absolute top-[50px] -right-[10px] rounded-full w-[150px] h-[150px] bg-white/30"></div>
          <div class="absolute top-[80px] right-[80px] rounded-full w-[120px] h-[120px] bg-white/30"></div>
          <div class="absolute top-[80px] right-[170px] rounded-full w-[110px] h-[110px] bg-white/30"></div>
          <div class="absolute top-[100px] right-[250px] rounded-full w-[70px] h-[70px] bg-white/30"></div>
          <div class="absolute top-[120px] right-[300px] rounded-full w-[60px] h-[60px] bg-white/30"></div>
        </div>
        <div class="transition-all duration-700 relative" :class="!sun ? 'opacity-100' : 'opacity-0'">
          <svg id="star-one" width="100" height="100" viewBox="0 0 100 100">
            <g id="star-copy" class="star-group">
              <g class="star-part-one">
                <path id="star-part-one" d="M41.25,40 L42.5,10 L43.75,40 L45,41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z" fill="white" />
              </g>
              <g class="star-part-two" transform="rotate(45)">
                <use xlink:href="#star-part-one" />
              </g>
              <g class="star-part-three">
                <path id="star-part-three" d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z" fill="white" />
              </g>
            </g>
          </svg>
          <svg id="star-two" width="40" height="40" viewBox="0 0 100 100">
            <use xlink:href="#star-copy" />
          </svg>
          <svg id="star-three" width="70" height="70" viewBox="0 0 100 100">
            <use xlink:href="#star-copy" />
          </svg>
        </div>
      </div>
      <div class="cursor-pointer rounded-full outset h-[144px] w-[144px] transition-all duration-700" :class="sun ? 'bg-yellow-300 translate-x-[13px]' : 'bg-gray-200 translate-x-[368px]'" @click="toggle()">
        <div class="transition-all duration-700 w-full h-full rounded-full overflow-hidden relative" :class="!sun ? 'opacity-100' : 'opacity-0'">
          <div class="w-[40px] h-[40px] rounded-full bg-black/10 top-[50px] right-[80px] inset-small absolute"></div>
          <div class="w-[20px] h-[20px] rounded-full bg-black/10 top-[30px] right-[40px] inset-small absolute"></div>
          <div class="w-[30px] h-[30px] rounded-full bg-black/10 top-[90px] right-[40px] inset-small absolute"></div>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-5">
      <a href="https://github.com/drazzardaq/equinox.git" target="_blank">
        <img :class="sun ? 'flex' : 'hidden'" src="./GitHub_Logo.png" alt="GitHub Logo" class="w-24">
        <img :class="!sun ? 'flex' : 'hidden'" src="./GitHub_Logo_White.png" alt="GitHub Logo" class="w-24">
      </a>
    </div>
  </div>
</template>

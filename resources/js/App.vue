<template>
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and fallback to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="sass">
@font-face
  font-family: Constantia
  src: url('./fonts/constan.ttf')

@font-face
  font-family: 'Courier New'
  src: Url('./fonts/cour.ttf')

@font-face
  font-family: 'Norican'
  src: Url('./fonts/Norican-Regular.ttf')

@font-face
  font-family: 'Courier Prime'
  src: Url('./fonts/CourierPrime-Regular.ttf')

body
  font-family: Constantia, Helvetica, Ariel !important
</style>

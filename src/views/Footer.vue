<template>
  <div class="baseFooter"></div>
</template>
 
<script>
export default {
  name: 'baseFooter'
}
</script>
 
<style scoped>
.baseFooter {
  position: fixed;
  left: 0;
  bottom: env(safe-area-inset-bottom);
  width: 100%;
  height: 50px;
  z-index: 500;
}
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { vClickOutside } from "./directives/clickOutside";

const documentClickedCount = ref(0);
const outsideDivClickCount = ref(0);
const handleOutSideClick = () => {
  outsideDivClickCount.value++;
};

onMounted(() => {
  document.addEventListener("click", () => documentClickedCount.value++);
});
</script>

<template>
  <section>
    <div>Document Click Count: {{ documentClickedCount }}</div>
    <div v-click-outside="() => handleOutSideClick()" class="test">
      Outside Click Count: {{ outsideDivClickCount }}
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;
  background-color: black;
  color: white;
  font-size: 2rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  gap: 1rem;
  text-align: center;
  user-select: none;
}

.test {
  background: #bada55;
  color: black;
  padding: 2rem 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
</style>

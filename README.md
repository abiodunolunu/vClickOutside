# Vue 3 + TypeScript + Vite

## A click outside directive for Vue3

- This is a directive to detect when an outside of a element has been clicked and the perform an action when that happens.

- A little tweak was added that makes it just run if the element was previous clicked-in and not just run on any outside click.

## Usage

```vue
// SCRIPT SETUP
<script setup>
import { clickOutside as vClickOutside } from "./directives/clickOutside";
</script>
<template>
  <div v-click-outside="() => doSomething()" class="test">
    <!-- CONTENT -->
  </div>
</template>
```

```vue
// COMPOSITION API

<script>
export default {
import { clickOutside } from "./directives/clickOutside";
  setup() {
    /*...*/
  },
  directives: {
    // enables v-click-outside in template
    clickOutside
  }
}
</script>
<template>
  <div v-click-outside="() => doSomething()" class="test">
    <!-- CONTENT -->
  </div>
</template>
```

```vue
// OPTIONS API
<script>
import {clickOutside} from "./directives/clickOutside";
export default {
  directives: {
    // enables v-click-outside in template
    clickOutside
  }
</script>
<template>
  <div v-click-outside="() => doSomething()" class="test">
    <!-- CONTENT -->
  </div>
</template>
```

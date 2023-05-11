<script setup>
import JokeCard from '@/components/JokeCard.vue'
</script>
<template>
  <div>
    <h1>Suspense Component</h1>

    <Suspense>
      <template #default>
        <JokeCard modelValue:isError="isError" />
      </template>

      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>

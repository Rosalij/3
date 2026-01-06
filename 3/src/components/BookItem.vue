<template>

<article>
  <h2>{{ book.title }}</h2>
  <p>Author: {{ book.author }}</p>
  <p>Rating: {{ book.rating }}</p>
  <p>Read: {{ book.read }}</p>

  <button @click="emit('deleteTodo', book._id)">
    Delete
  </button>
</article>
</template>

<script setup>
// Emitting event to notify parent component
 const emit = defineEmits(['deleteTodo']);
// Defining props to receive book data
defineProps({
  book: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
  article {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article:hover {
    background-color: #f9f9f9;
  }

  h2 {
    margin: 0 0 0.5rem 0;
  }

  h1 {
   text-align: center;
  }
  * {
    margin: 0.25rem 0;
  }
  
  </style>
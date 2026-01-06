<template>
    
    <form @submit.prevent="addBook">
        <label for="addBook">Add book to list, or click on a book to delete it</label>
<label for="addBook">Book title:</label>
        <input type="text" id="addBook" placeholder="Book title" v-model="title" />
        <label for="addAuthor">Author:</label>
        <input type="text" id="addAuthor" placeholder="Author" v-model="author" />
        <label for="addRating">Rating 0-5:</label>
        <input type="number" id="addRating" placeholder="Rating" v-model="rating"/>
        <label for="read">Read:</label>
        <input type="checkbox" id="read" placeholder="Read" v-model="read"/>

        <button type="submit">Add</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
</template>

<script setup>

import { ref } from "vue";
    // Emitting event to notify parent component
const emit = defineEmits(["bookAdded"]);

// Reactive variables for form inputs and error message
const title = ref("");
const author = ref("");
const rating = ref(0);
const read = ref(false);
const error = ref("");


// Function to add a new book
const addBook = async () => {
  error.value = "";

  if (title.value.length < 3) {
    error.value = "Book title must be at least 3 characters long.";
    return;
  }

  const data = {
    title: title.value,
    author: author.value,
    rating: rating.value,
    read: read.value,
  };
// Sending POST request to add the book
  try {
    const response = await fetch("https://lab22fullstack.onrender.com/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      error.value = "Failed to add book. Please try again.";
      return;
    }
    title.value = "";
    author.value = "";
    rating.value = 0;
    read.value = false;

    emit("bookAdded");

  } catch {
    error.value = "An error occurred. Please try again.";
  }
};
</script>

<style scoped>
label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin: auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 400px;
    margin-top: 1rem;
}

input {
    padding: 0.5rem;
    font-size: 1rem;
}

button {
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.error {
    color: red;
    margin-top: 0.5rem;
}
</style>
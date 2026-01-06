<template>
  <div class="container">
    <AddBook @book-added="getBooks" />
    <br />

    <BookItem
      v-for="book in books"
      :key="book._id"
      :book="book"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script setup>
import AddBook from "../components/AddBook.vue";
import BookItem from "../components/BookItem.vue";
import { ref, onMounted } from "vue";

const books = ref([]);

const getBooks = async () => {
  try {
    const response = await fetch("https://lab22fullstack.onrender.com/books");
    if (response.ok) {
      books.value = await response.json();
    }
  } catch {
    console.log("there was an error");
  }
};

const deleteTodo = async (_id) => {
  try {
    const response = await fetch(
      `https://lab22fullstack.onrender.com/books/${_id}`,
      { method: "DELETE" }
    );

    if (response.ok) {
      getBooks();
    }
  } catch {
    console.log("there was an error");
  }
};

onMounted(getBooks);
</script>


<style scoped>
h1 {
  color: red;
}   
.container {

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


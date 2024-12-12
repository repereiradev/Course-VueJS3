<script setup>
import { computed } from 'vue';

const props = defineProps(['books']);

const booksRead = computed(() => {
  return props.books.filter(book => book.isRead).length;
});

const booksReadMessage = computed(() => {
  return booksRead.value >= props.books.length ? 'Parabéns, leu todos os livros' :   `` 
});

</script>

<template>
  <div>
    <div class="books-read">
        <label for="progress">Seu progresso</label><br> 
        <progress :value="booksRead" :max="books.length"></progress>
        <p>{{ `${booksRead} de ${books.length} livros lidos.` }}</p>
        <p>{{ booksReadMessage }}</p>
    </div>

  </div>
</template>
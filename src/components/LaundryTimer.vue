<script>
export default {
  data() {
    return {
      userInput: '',
      displayedMessage: ''
    }
  },
  methods: {
    changeMessage() {
      this.displayedMessage = this.userInput;
    }
  }
}
</script>

<template>
  <input type="text" v-model="userInput" placeholder="Enter your message">
  <button @click="changeMessage">Display Message</button>
  <div>userInput: {{ userInput }}</div>
  <div v-if="displayedMessage">displayedMessage: {{ displayedMessage }}</div>
</template>

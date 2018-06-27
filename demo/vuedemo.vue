<template>
  <div>
    <MyComponent
      @click="getNewIntent"
      :class="{ 'disabled': uiState === 'listening' }" />
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'

export default {
  props: {
    aborted: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  components: {
    MyComponent
  },
  computed: {
    uiState() {
      return this.$store.state.uiState
    }
  },
  methods: {
    getNewIntent() {
      this.$store.dispatch('getSpeech')
      this.$emit('isaborted', false)
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 1000px;
  background: teal;
  margin-top: 10px;
  transition: 0.3s all ease-out;
}

button.disabled {
  background: #ccc;
  cursor: none;
}
</style>

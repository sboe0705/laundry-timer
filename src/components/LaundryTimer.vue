<script>
export default {
  data() {
    return {
      washPrograms: [
        {id: '1', label: '2:00 Hours', duration: 120},
        {id: '2', label: '2:30 Hours', duration: 150}
      ],
      finishingTime: null,
      modalActive: 'modal'
    }
  },
  methods: {
    changeMessage() {
      this.displayedMessage = this.userInput;
    },
    openModal() {
      this.modalActive = 'modal is-active';
    },
    closeModal() {
      this.modalActive = 'modal';
    }
  }
}
</script>

<template>
    <div class="container">

    <p class="title is-1">Laundry Timer</p>

    <b-field label="Wash Program" label-position="on-border">
      <b-select expanded placeholder="Select Wash Program ...">
        <option v-for="option in washPrograms" :key="option.id" :value="option.id">
          {{ option.label }}
        </option>
      </b-select>
    </b-field>

    <b-field label="Finishing Time" label-position="on-border">
      <b-timepicker placeholder="Select Finishing Time ..." :increment-minutes="15" v-model="finishingTime" />
    </b-field>

    <b-button type="is-primary" @click="openModal">Calculate Timers</b-button>

    <div :class="modalActive">
      <div class="modal-background" @click="closeModal" />
      <div class="modal-content">
        <div class="container">
          <article class="message is-primary">
            <div class="message-header">
              <p>Hello World</p>
              <button class="delete" aria-label="delete" @click="closeModal" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
              nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
              diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
              <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
              sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
              neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

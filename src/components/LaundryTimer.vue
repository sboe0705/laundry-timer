<script>
import { LaundryTimerService } from '../LaundryTimerService.js'
export default {
  data() {
    return {
      service: new LaundryTimerService(
        15 // timeBuffer
      ),

      // technical variables
      modalIsActive: false,
      modalCanClose: ['escape', 'outside'],

      // functional variables
      washPrograms: [
        {id: '1', label: '2:00 Hours', duration: 120},
        {id: '2', label: '2:30 Hours', duration: 150}
      ],
      washDuration: null,
      finishTime: null
    }
  },
  methods: {
    calculateTimers() {
      if (this.washDuration != null && this.finishTime != null) {

        const timers = this.service.calculateTimers(this.washDuration, this.finishTime);

        this.startTimeAsString = timers.startTimeAsString;
        this.durationUntilStartAsString = timers.durationUntilStartAsString;

        this.finishTimeAsString = timers.finishTimeAsString;
        this.durationUntilFinishAsString = timers.durationUntilFinishAsString;

        this.modalIsActive = true;
      }
    }
  }
}
</script>

<template>
    <div class="container is-fluid">

    <p class="title is-1">Laundry Timer</p>

    <b-field label="Wash Program" label-position="on-border">
      <b-select expanded placeholder="Select Wash Program ..." v-model="washDuration">
        <option v-for="option in washPrograms" :key="option.id" :value="option.duration">
          {{ option.label }}
        </option>
      </b-select>
    </b-field>

    <b-field label="Finishing Time" label-position="on-border">
      <b-timepicker inline placeholder="Select Finishing Time ..." :default-minutes=0 :increment-minutes=15 v-model="finishTime" />
    </b-field>

    <b-button type="is-primary" @click="calculateTimers">Calculate Timers</b-button>

    <b-modal v-model="modalIsActive" :can-cancel="modalCanClose">
      <b-message title="Success" type="is-success" aria-close-label="Close message" @close="modalIsActive = false">
        <p>The washing machine starts in <b>{{durationUntilStartAsString}}</b> (at {{startTimeAsString}}).</p>
        <p>The laundry is finished in <b>{{durationUntilFinishAsString}}</b> (at {{finishTimeAsString}}).</p>
      </b-message>
    </b-modal>

  </div>
</template>

<script>
import { format, formatDistanceToNowStrict } from 'date-fns'
export default {
  data() {
    return {

      // technical variables
      modalIsActive: false,
      modalCanClose: ['escape', 'outside'],

      // functional variables
      washPrograms: [
        {id: '1', label: '2:00 Hours', duration: 120},
        {id: '2', label: '2:30 Hours', duration: 150}
      ],
      timeBuffer: 15,
      washProgramDuration: null,
      finishingTime: null
    }
  },
  methods: {
    calculateTimers() {
      if (this.washProgramDuration != null && this.finishingTime != null) {
        this.finishingTimeAsString = format(this.finishingTime, "p");
        this.durationTillFinishedAsString = formatDistanceToNowStrict(this.finishingTime);

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
      <b-select expanded placeholder="Select Wash Program ..." v-model="washProgramDuration">
        <option v-for="option in washPrograms" :key="option.id" :value="option.duration">
          {{ option.label }}
        </option>
      </b-select>
    </b-field>

    <b-field label="Finishing Time" label-position="on-border">
      <b-timepicker placeholder="Select Finishing Time ..." :increment-minutes="15" v-model="finishingTime" />
    </b-field>

    <b-button type="is-primary" @click="calculateTimers">Calculate Timers</b-button>

    <b-modal v-model="modalIsActive" :can-cancel="modalCanClose">
      <b-message title="Success" type="is-success" aria-close-label="Close message" @close="modalIsActive = false">
        The laundry is finished in <b>{{durationTillFinishedAsString}}</b> (at {{finishingTimeAsString}}).
      </b-message>
    </b-modal>

  </div>
</template>

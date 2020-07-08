<script>
import VueCharts, { Doughnut } from 'vue-chartjs'
import { toyService } from '@/services/toy.service.js'

export default {
  extends: Doughnut,
  props: ['labels', 'data'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#00b8ec', '#4545ff', '#ff2511', '#45fddf', '#00ff00'],
          data: this.data
        }
      ]
    })
  },
}
</script>
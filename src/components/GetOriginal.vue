<template>
    <div style="text-align: justify; margin: 24px;">
        <v-row>
          <v-col>
            <h1 style="text-align: center;">Обучаем вождению </h1>
            <h1 style="color:#008000;text-align: center;">на современных иномарках</h1>
          </v-col>
        </v-row>
      <v-row>
        <v-col>
            <h1 style="text-align: center">Порядок обучения</h1>
        </v-col>
      </v-row>
      <v-row
      >
        <v-col>
          <v-card
              class="pa-2"
              color="#274C77"
              dark
              height="100%"
          >
            <p>Заключаем договор online/в офисе</p>
            <img src="../assets/common/po1.png" style="width:100%"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="pa-2"
              height="100%"
              color="#6096BA"
              dark
          >
            <p>Оплата через Сбербанк или наличными</p>
            <img src="../assets/common/po2.png" style="width:100%"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="pa-2"
              height="100%"
              color="#A3CEF1"
              dark
          >
            <p>Учите теорию в классе или из дома</p>
            <img src="../assets/common/p3.png" style="width:100%"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card
              class="pa-2"
              height="100%"
              color="#A3CEF1"
              dark
          >
            <p>Приступаете к вождению</p>
            <img src="../assets/common/po4.png" style="width:100%"/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Bar :data="data" :options="options" />
        </v-col>
      </v-row>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "GetOriginal",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bar
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      }
    }
  }
}
</script>

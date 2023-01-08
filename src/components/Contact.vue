<template>
  <div style="margin:24px">
    <v-row>
      <v-col>
        <div class="box-8"><h1 style="text-align: center; color: #008000;">Узнайте больше о нашей школе</h1></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
        height="100%">
          <h5><b>Лицензии</b></h5>
          <p style="background-color: #008000;color: #ffffff;padding: 10%; font-size: 12px;">Смотреть лизенции</p>
        </v-card>
        </v-col>
      <v-col>
        <v-card
            height="100%">
          <h5><b>Аккредитация ГИБДД</b></h5>
          <p style="background-color: #008000;color: #ffffff; padding: 10%; font-size: 12px;">Проверить аккредитации</p>
        </v-card>
        </v-col>
      <v-col>
        <v-card
            height="100%">
          <h5><b>Оплата обучения</b></h5>
          <p style="background-color: #008000;padding: 10%;color: #ffffff; font-size: 12px;">Оплатить обучение</p>
        </v-card>
        </v-col>
      <v-col>
        <v-card
            height="100%">
          <h5><b>Филиалы</b></h5>
          <p style="background-color: #008000;padding: 10%; color: #ffffff; font-size: 12px;">Смотреть список филиалов</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 style="color: #008000; text-align: center;">
          Подберите филиал Автошколы, который вам подходит!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 style="text-align: center;">Режим работы филиалов:
          пн-пт 11:00-20:00, сб 10:00-16:00</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <highcharts
            :constructorType="'stockChart'"
            class="hc"
            :options="chartOptions"
            ref="chart"
        ></highcharts>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {Chart} from "highcharts-vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    }
  }
}
</script>

<style scoped>

</style>

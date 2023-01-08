<template>
  <div style="margin:24px">

    <v-row>
      <v-col>
        <v-card
            class="pa-2"
            color="#ffffff"
            dark
            height="100%">
          <v-card>
            <p class="bloc1_1">Обучение online и в классах</p>
          </v-card>
          <v-card>
            <p class="bloc1_2">Записаться на обучение по старым ценам</p>
          </v-card>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            height="100%">
          <v-card>
            <p class="bloc1_2">Обучитесь и получите права до повышения цен в ноябре 2022!</p>
          </v-card>
          <v-card>
            <ul>
            <li>
              ✔ 10 пакетов обучения от 13'900₽
            </li>
            <li>
              ✔ Филиалы в 2 мин. от метро
            </li>
            <li>
              ✔ Свой автопарк иномарок
            </li>
          </ul>
          </v-card>
        </v-card>
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
            <p>32 филиала в Москве</p>
            <img src="../assets/common/kz1.gif" style="width:100%"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-2"
            height="100%"
            color="#6096BA"
            dark
          >
            <p>Современные светлые классы</p>
            <img src="../assets/common/kz2.jpg" style="width:100%"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-2"
            height="100%"
            color="#A3CEF1"
            dark
          >
            <p>Более 30000 выпускников</p>
            <img src="../assets/common/kz3.jpg" style="width:100%"/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
          height="100%">
            <ul>
              <li><p style="font-size: 24px;color:#00a550;">Фиксируйте стоимость обучения!</p></li>
              <li style="text-align: justify;padding-left: 5%;padding-top: 2%;padding-bottom: 2%;padding-right: 5%;">
                ✅ Скидка пока действует
                До 5 ноября действует скидка –5100 руб. на обучение.
              </li>
              <br/>
              <li style="text-align: justify;padding-left: 5%;padding-top: 2%;padding-bottom: 2%;padding-right: 5%;">
                ✅ Сдерживаем рост цен
                Пока мы можем не поднимать цены на обучение, но для сохранения рабочих мест наших сотрудников, нам придется сделать это в самое ближайшее время.
              </li>
              <br/>
              <li style="text-align: justify;padding-left: 5%;padding-top: 2%;padding-bottom: 2%;padding-right: 5%;">
                ✅ Фиксируем цену обучения
                Мы ГАРАНТИРУЕМ вам обучение по текущей стоимости, зафиксированной в договоре, как бы не поменялась ситуация.
              </li>
            </ul>
          </v-card>
        </v-col>
        <v-col>
          <v-card
          height="100%">
            <ul>
              <li><p style="font-size: 24px;">Почему важно начать обучение уже сейчас</p></li>
              <li class="bloc7_1">
                <p style="font-weight: 700;">Иностранные автомобили подорожали</p>
                <p style="text-align: justify;">Мы регулярно обновляем автопарк, поэтому нам придется заложить увеличившуюся стоимость авто в себестоимость своей услуги.
                </p>
              </li>
              <br/>
              <li class="bloc7_1">
                <p style="font-weight: 700;">Авто запчасти подорожали</p>
                <p style="text-align: justify;">Наши авто требуют периодического технического обслуживания, а также ремонта. Это так же повлияет на наши расходы.</p>
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    <v-row>
      <v-col>
        <h3 style="text-align: center;">Зависимость стоимости от времени обучения(в неделях)</h3>
        <highcharts :options="chartOptions"></highcharts>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {Chart} from "highcharts-vue";
  export default {
    name: 'HelloWorld',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      highcharts: Chart
    },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }),
  }
</script>


<style>
.bloc1_2 {
  width:100%;
  height:40%;
  background: #ffffff;
  color: #000000;
  text-align: center;
  border:1px solid;
  font-size: 24px;
}
.bloc1_1 {
  width:100%;
  height: 50%;
  background: #00a550;
  text-align: center;
  border-radius: 10px;
  font-size: 24px;
  color: #ffffff;
  border:1px solid #33ff99;
  padding-top: 2%;
}
.bloc7_1 {
  background: #33ff99;
  border-radius: 5px;
  color:#696969;
  padding-left: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-right: 5%;
}
</style>

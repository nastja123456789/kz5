<template>
  <div style="margin:24px">
  <v-row>
    <v-col>
      <div class="container_card" style="padding-top: 5%;padding-bottom: 5%;">
        <h4><b>При включении зеленого сигнала светофора Вы должны уступить дорогу:</b></h4>
        <br/>
        <ul>
          <li>1.Только легковому автомобилю.</li>
          <br/>
          <li>2. Обоим автомобилям.</li>
          <br/>
          <li>3. Только грузовому автомобилю, завершающему разворот на перекрестке.</li>
        </ul>
      </div>
    </v-col>
    <v-col>
      <div class="container_card" style="padding-top: 5%;padding-bottom: 5%;">
        <h4><b>При движении прямо Вы обязаны уступить дорогу:</b></h4>
        <br/>
        <ul>
          <li>1. Всем транспортным средствам.</li>
          <br/>
          <li>2. Только легковому автомобилю.</li>
          <br/>
          <li>3. Автобусу и легковому автомобилю.</li>
        </ul>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div class="container_card" style="padding-top: 5%;padding-bottom: 5%;">
        <h4><b>Допускается ли пересекать сплошную линию разметки, обозначающую край проезжей части?</b></h4>
        <br/>
        <ul>
          <li>1. Допускается для остановки на обочине и при выезде с нее.</li>
          <br/>
          <li>2. Запрещается.</li>
          <br/>
          <li>3. Допускается для остановки на обочине и при выезде с нее только в местах, где разрешена остановка или стоянка.</li>
        </ul>
      </div>
    </v-col>
    <v-col>
      <div class="container_card" style="padding-top: 5%;padding-bottom: 5%;">
      <h4><b>Разрешается ли водителю движение со слишком малой скоростью?</b></h4>
      <br/>
      <ul>
        <li>1. Запрещается.</li>
        <br/>
        <li>2. Разрешается, если при этом не создаются помехи другим транспортным средствам.</li>
        <br/>
        <li>3. Разрешается.</li>
      </ul>
    </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <div class="container_card" style="padding-top: 5%;padding-bottom: 5%;">
      <img src="../assets/common/ab.jpg" width="100%;"/>
      <h4><b>Можно ли Вам поставить автомобиль на стоянку в указанном месте?</b></h4>
      <br/>
      <ul>
        <li>1. Можно только при видимости дороги не менее 100 м.</li>
        <br/>
        <li>2. Нельзя.</li>
        <br/>
        <li>3. Можно.</li>
      </ul>
    </div>
    </v-col>
    <v-col>
      <div class="container_card" style="padding-top: 5%;padding-bottom: 5%;">
      <img src="../assets/common/ac.jpg"/>
      <h4><b>Как Вам следует поступить при повороте налево?</b></h4>
      <br/>
      <ul>
        <li>1. Уступить дорогу только грузовому автомобилю с включенным проблесковым маячком.</li>
        <br/>
        <li>2. Уступить дорогу обоим транспортным средствам.</li>
        <br/>
        <li>3. Проехать перекресток первым.</li>
      </ul>
    </div>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Trainer"
}
</script>

<style scoped>
.container_card {
  padding: 2px 16px;
}
</style>

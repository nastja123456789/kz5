<template>
    <div >
      <v-app-bar
        color="#ab7f6a"
        dark
        prominent
        src="../assets/common/kz4.png"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(227, 219, 157,.3), rgba(96, 150, 186,.3)"
          ></v-img>
        </template>

        <v-toolbar-title>ЗЕЛЕНЫЙ СВЕТ</v-toolbar-title>

        <v-spacer></v-spacer>

      </v-app-bar>
    </div>
  </template>

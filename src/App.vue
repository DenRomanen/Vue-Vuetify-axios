<template>
  <v-app>
    <v-content>
      <div id="body">
        <titleOfLink />
        <sendFormPhone />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import titleOfLink from "./components/title";
import sendFormPhone from "./components/form";

export default {
  name: "App",
  components: {
    titleOfLink,
    sendFormPhone
  },
  data: () => ({})
};
</script>
 <style scoped>
@import url("./vendor/normalize.css");
@import url("./vendor/stylesheet.css");

#body {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Geometria";
}
</style>

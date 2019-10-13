<template >
  <div>
    <p class="header__text">{{ textMy }}</p>
  </div>
</template>


<script>
export default {
  data: () => ({
    textMy: "Номер телефона:"
  })
};
</script>

<style  scoped>
.header__text {
  margin: 100px 0 0 0;

  width: 340px;

  color: rebeccapurple;
}
</style>
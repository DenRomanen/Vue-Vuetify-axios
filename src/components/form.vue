<template>
  <v-form @submit.prevent="getData">
    <div class="form">
      <v-text-field
        :rules="rules"
        @input="defaultParams"
        v-model="phone"
        placeholder="+7(123)4567890"
      ></v-text-field>
      <div class="text-center">
        <v-btn
          id="form_button"
          type="submit"
          class="ma-2"
          color="grey"
          :loading="loading"
          :disabled="loading || phone === '' || !checkActivButton"
        >Получить</v-btn>
      </div>
    </div>
    <ul>
      <li
        class="liResult"
        v-if="serverInfo"
        v-for="(value, name, index) in serverData"
      >Программа {{index+1}}: {{ value }}</li>
    </ul>
  </v-form>
</template>

<script>
import { getBalanceByPhone } from "../utils/verify";
import { gettingData } from "../utils/gettingData";

export default {
  data() {
    return {
      phone: "",
      loading: false,
      PATTERN: /^(((([+]7)|(8))[(]?\s?\d{3}[)]?\s?[-]?\d{3}[-]?\d{2}[-]?\d{2})|([(]?\s?\d{3}[)]?\s?[-]?\d{3}[-]?\d{2}[-]?\d{2}))$/,
      loding: false,
      serverInfo: true,
      serverData: {},

      rules: [
        value => {
          return (
            this.PATTERN.test(value) ||
            value.length === 0 ||
            "Некорректный формат номера"
          );
        },
        value => {
          return (
            (value.length !== 0 && this.serverInfo) ||
            (value.length !== 0 && !this.serverInfo) ||
            (value.length === 0 && this.serverInfo) ||
            "Клиент с таким номером не найден"
          );
        }
      ]
    };
  },
  computed: {
    checkActivButton() {
      return this.PATTERN.test(this.phone);
    }
  },
  methods: {
    defaultParams() {
      if (this.phone.length != 0) {
        this.serverData = {};
        this.serverInfo = true;
      }
    },
    reset() {
      this.phone = "";
      this.loading = false;
    },
    getData() {
      this.loading = true;
      this.serverInfo = true;
      getBalanceByPhone()
        .then(result => {
          if (!gettingData(this.phone, result)) {
            this.serverInfo = gettingData(this.phone, result);
          } else this.serverData = gettingData(this.phone, result);
          this.reset();
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style >
.form {
  display: flex;
  align-items: center;
}
.errorMessage {
  color: red;
  font-size: 12px;
}
.liResult {
  list-style-type: none;
}
</style>
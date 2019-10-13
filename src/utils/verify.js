import axios from "axios";
import { BALANCE_URL } from "./config";

export const getBalanceByPhone = () =>
  axios
    .get(BALANCE_URL)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
      alert("Ошибка сервера 404");
    });

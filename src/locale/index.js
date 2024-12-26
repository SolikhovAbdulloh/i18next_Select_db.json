import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import db from "../../db.json";

i18next.use(initReactI18next).init({
  resources: db,
  lng: "en",
  fallbackLng: "en",
});
export default i18next;

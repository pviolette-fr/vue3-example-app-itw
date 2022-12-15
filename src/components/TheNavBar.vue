<template>
  <nav
    class="sticky top-0 z-50 flex flex-row justify-between h-16 p-3 bg-slate-300 shadow-md shadow-slate-400"
  >
    <RouterLink to="/">
      <img :src="imgUrl" />
    </RouterLink>

    <div>
      <label class="mr-1">{{ $t("settings.languageLabel") }}</label>
      <select @change="onLanguageSelect" v-model="selectedLanguage">
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  </nav>
</template>
<script>
import imgUrl from "../assets/logo.svg";
export default {
  name: "TheNavBar",
  data() {
    return {
      imgUrl,
    };
  },
  computed: {
    selectedLanguage: {
      get() {
        return this.$i18n.locale;
      },
      set(value) {
        this.$i18n.locale = value;
      },
    },
  },
};
</script>

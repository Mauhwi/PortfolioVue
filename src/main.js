import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
Vue.config.productionTip = false
Vue.use(VueI18n);

const messages = {
  RU: {
    message: {
      aboutme: 'Обо мне',
      aboutmedetails: 'Привет! Меня зовут Дарья, и я свежий выпускник, ищущий стажировку в сфере Веб-разработки',
      skills: 'Навыки',
      frontendtext: 'Знание основных языков разметки, а так же нескольких библиотек и фреймворков: Bootstrap, jQuery, Vue.js',
      backendtext: 'В ходе обучения разработаны проекты с использованием Spring, Hibernate, MySQL и Thymeleaf, а так же дипломный Android-проект, использующий библиотеки архитектурных компонентов: Room, ViewModel, LiveData и СУБД SQLite.',
      education: 'Образование',
      educationdetails: 'Южно-Уральский Государственный Университет. Бакалавр специальности "Информатика и вычислительная техника" 2020г.',
    }
  },
  EN: {
    message: {

      aboutme: 'About me',
      aboutmedetails: "Hello! My name is Darya and I'm a fresh Computer Science graduate looking for a Web-development internship.",
      skills: 'Skills',
      frontendtext: 'Knowledge of core web technologies as well as some of the popular libraries and frameworks: Bootstrap, jQuery, Vue.js',
      backendtext: 'My coding projects include projects that use Spring, Hibernate and Thymeleaf with MySQL database, as well as graduation project for Android, developed with the use of architecture component libraries: Room, ViewModel, LiveData and SQLite database.',
      education: 'Education',
      educationdetails: "South Ural State University. Bachelor's degree in 'Computer Science and Computer Engineering' 2020",

    }
  }
};

const i18n = new VueI18n({
  locale: 'EN',
  messages
});

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')


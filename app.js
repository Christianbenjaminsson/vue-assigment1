const app = Vue.createApp({
  data() {
    return {
      name: "Christian",
      age: 40,
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    randomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");

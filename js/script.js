const { createApp } = Vue;

createApp({
   data() {
      return {

         discsArray: [],
         urlAPI: "http://localhost/boolean/php-dischi-json/server.php",

      };
   },
   created() {

      axios
         .get(this.urlAPI)
         .then((resp) => {

            this.discsArray = resp.data.results;

            console.log(this.discsArray);

         });


   },
   methods: {

   },

}).mount("#app");
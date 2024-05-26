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

      toggleLike(givenIndex) {

         const data = {
            action: "toggle-like",
            disc_index: givenIndex,
         };

         axios
            .post(this.urlAPI, data, {

               headers: {'Content-Type': 'multipart/form-data'},

            })
            .then((resp) => {

               this.discsArray = resp.data.results;
   
               console.log(this.discsArray);
   
            });
      },
      
   },

}).mount("#app");
const { createApp } = Vue;

createApp({
    data() {
        return {
            dischi: []
        };
    },
    mounted() {
        // console.log(axios);
        axios.get('http://localhost/php-dischi-json/backend/api/get-dischi.php').then((response) => {
            this.dischi = response.data;
            console.log(this.dischi);
        })
    }
}).mount('#app');
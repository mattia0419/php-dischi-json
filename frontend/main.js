const { createApp } = Vue;

createApp({
    data() {
        return {
            dischi: []
        };
    },
    methods: {
        buildingImage(imageName) {
            const imageUrl = new URL(imageName);
            console.log(imageUrl);
            return imageUrl.href;
        }
    },
    mounted() {
        // console.log(axios);
        axios.get('http://localhost/php-dischi-json/backend/api/get-dischi.php').then((response) => {
            this.dischi = response.data;
            console.log(this.dischi);
        })
    },
    computed() {
        buildingImage(imageName);
    }
}).mount('#app');
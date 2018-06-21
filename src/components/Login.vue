<template>
    <div>
        Login
        <button v-on:clik="sayHello">HELLO !!!</button>
        {{batery}}<br>
        {{modelo}}
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "login",
        data: function () {
            return{
                batery:null,
                modelo:'ninguno'
            }
        },
        methods:{
            sayHello(){
                this.$root.hello();
            }
        },
        mounted(){
            const _this = this;
            Vue.cordova.on('deviceready', () => {
                // your code here
                _this.modelo = device.model
            });
            window.addEventListener("batterystatus", onBatteryStatus, false);

            function onBatteryStatus(status) {
               _this.batery= ("Level: " + status.level + " isPlugged: " + status.isPlugged);
            }

        }

    }


</script>

<style scoped>

</style>
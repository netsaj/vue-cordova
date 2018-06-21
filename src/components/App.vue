<template>
    <div>
        App templante
        <ul>
            <li><router-link tag="a" :to="{name: 'home'}">ir a Login</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>
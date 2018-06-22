<template>
    <div>
        <!-- main toolbar -->
        <div class="bmd-layout-container bmd-drawer-f-l">
            <header class="bmd-layout-header">
                <div class="navbar navbar-light bg-faded">
                    <button class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s1">
                        <span class="sr-only">Toggle drawer</span>
                        <i class="material-icons">menu</i>
                    </button>
                    <ul class="nav navbar-nav">
                        <li class="nav-item">Title</li>
                    </ul>
                </div>
            </header>
            <div id="dw-s1" class="bmd-layout-drawer bg-faded">
                <header>
                    <a class="navbar-brand">Title</a>
                </header>
                <ul class="list-group">
                    <a class="list-group-item">Link 1</a>
                    <a class="list-group-item">Link 2</a>
                    <a class="list-group-item">Link 3</a>
                </ul>
            </div>
            <main class="bmd-layout-content">
                <div class="container">
                    <p>Main content</p>
                </div>
            </main>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                drawer: null,
                items: [
                    {title: 'Home', icon: 'dashboard', link : 'home'},
                    {title: 'About', icon: 'question_answer'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
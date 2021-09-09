<template>


    <div>
        <h1>{{ message }}</h1>
    </div>


</template>

<!-- // TODO -->

<script>

    name:   'SecondComponent'

    export default {

        data() {
            return {
                message: 'Second component!'
            }
        },
        methods: {

        }
    }

</script>


<style Scoped>

h1 {
    color: #73ff00;
    text-decoration: bold;
    font-size: 2em;
    text-align: center;
    margin: 50px;
}


</style>


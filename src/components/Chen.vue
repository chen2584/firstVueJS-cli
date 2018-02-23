<template>
    <div class="Chen">
    {{ kuy }} {{ kuyz }}<br/>
    {{ plus }} {{ multiply }}<br/>
    {{ this.$route.query.test }}<br/>
    {{ this.$route.params.id }}
    12345asdasd
    </div>

</template>

<script>
    export default {
        name: 'Chen',
        props: {
            kuy: String,
            kuyz: String
        },
        data() {
            return {
                var1: "var1",
                var2: 5
            }
        },
        computed: {
            plus() {
                return this.var2 + this.var2;
            },
            multiply() {
                return this.var2 * this.var2;
            }
        }
    }
</script>

<style scoped>
    .Chen {
        color: red;
    }
</style>
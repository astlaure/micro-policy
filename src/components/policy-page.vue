<template>
    <div>
        <h1 class="policy-page">Policy Page in Vue</h1>

        <ul>
            <li>Client Name: </li>
            <li>Policy: {{ info.policy }}</li>
            <li>Effective Date: {{ info.startDate }}</li>
            <li>Cost: {{ info.cost }}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                info: {}
            }
        },
        mounted() {
            axios.get('http://localhost:3002/api/policy')
                .then(response => this.info = response.data)
        }
    }
</script>

<style lang="scss">
    .policy-page {
        color: green;
    }
</style>
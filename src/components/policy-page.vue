<template>
    <div>
        <h1 class="policy-page">Policy Page in Vue</h1>

        <ul>
            <li>Client Name: {{ name }}</li>
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
                info: {},
                name: ''
            }
        },
        mounted() {
            axios.get('/policyapi/api/policy')
                .then(response => this.info = response.data);
            window.clientService.getClient()
                .then(response => this.name = response.name);
        }
    }
</script>

<style lang="scss">
    .policy-page {
        color: green;
    }
</style>
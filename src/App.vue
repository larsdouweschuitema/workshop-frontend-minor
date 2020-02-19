<template>
    <div>
        <img :src="logo" style="width: 100px" />
    </div>
</template>

<script>
import logo from '@/assets/img/logo.svg';

export default {
    data() {
        return {
            logo
        }
    }
}
</script>

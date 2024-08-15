<script>
import Utils from "../../utils";

export default {
    name: "mio-card",
    data() {
        return {
            UUID: Utils.GenerateUUID()
        }
    }
}
</script>

<template>
    <div :id="'MiO-Card-' + UUID" class="mio-card"></div>
</template>

<style scoped lang="scss"></style>

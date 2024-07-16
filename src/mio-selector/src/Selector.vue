<script>
import Utils from "../../utils";

export default {
    name: "mio-selector",
    props: {},
    data() {
        return {
            UUID: Utils.GenerateUUID()
        };
    },
    mounted() {
        console.log("Selector mounted");
    }
};
</script>

<template>
    <div :id="'MiO-UI-Selector-' + UUID" class="mio-ui-selector-container">Selector</div>
</template>

<style scoped></style>

<script>
import Utils from "../../utils";

export default {
    name: "mio-tree",
    data() {
        return {
            UUID: Utils.GenerateUUID()
        };
    }
}
</script>

<template>
    <div :id="'MiO-Tree-' + UUID"></div>
</template>

<style scoped lang="scss"></style>

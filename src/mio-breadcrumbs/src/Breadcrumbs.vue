<script>
import Utils from "../../utils";

export default {
    name: "mio-breadcrumbs",
    data() {
        return {
            UUID: Utils.GenerateUUID()
        }
    }
}
</script>

<template>
    <div :id="'MiO-Breadcrumbs-' + UUID" class="mio-breadcrumbs"></div>
</template>

<style scoped lang="scss"></style>

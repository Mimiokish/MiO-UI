<script>
export default {
    name: "mio-table-column"
}
</script>

<script setup>
import { inject, useSlots, onBeforeMount } from "vue";

const props = defineProps({
    prop: {
        type: [ String, Number ],
        default: ""
    },
    title: {
        type: String,
        default: ""
    }
})

const UpdateMethods = inject("UpdateMethods");

const _slots = useSlots();

onBeforeMount(() => {
    UpdateMethods.FillColumns(props.prop, _slots["default"], props.title);
});
</script>

<template>
    <th class="mio-table-column">
        <template v-if="_slots['default']">
            <slot name="default" />
        </template>
        <template v-else>{{ props.title }}</template>
    </th>
</template>

<style lang="scss" scoped>
.mio-table-column {
    box-sizing: border-box;
    padding: 6PX 10PX;
    font-size: 14PX;
    font-weight: 800;
    color: rgba(46, 46, 46, 0.8);
    height: 38PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
</style>

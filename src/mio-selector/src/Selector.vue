<script>
import Options from "./Options.vue";
import Utils from "../../utils";

export default {
    name: "mio-selector",
    components: [
        Options
    ],
    props: {
        modelValue: {
            type: [String, Number, null],
            default: null
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            UUID: Utils.GenerateUUID()
        };
    },
    watch: {
        list: {
            immediate: true
        }
    }
};
</script>

<template>
    <div :id="'MiO-UI-Selector-' + UUID" class="mio-ui-selector-container">
        <div v-if="options.length <= 0" class="selector-no-data">暂无数据</div>
        <template v-else>
            <template v-for="option in options">
                <div v-if="option.value === modelValue" class="selector-value">{{ option.label }}</div>
            </template>
            <div class="selector-icon"></div>
            <Options :id="'MiO-UI-Options-' + UUID" :options="options" />
        </template>
    </div>
</template>

<style scoped></style>

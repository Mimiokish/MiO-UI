<script>
export default {
    name: "mio-options",
    props: {
        options: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<template>
    <div class="mio-options-container">
        <template v-for="option in options">
            <div>{{ option.label }}</div>
        </template>
    </div>
</template>

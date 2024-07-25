<script>
export default {
    name: "mio-list-item",
    props: {
        marker: {
            type: String,
            default: ""
        },
        item: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            _marker: this.marker
        }
    },
    methods: {
        handleClick() {
            const _node= this.$el;

            if (_node && _node.children) {
                const len = _node.children.length

                for (let idx = 0; idx < len; idx++) {
                    const _child = _node.children[idx];

                    if (_child) {
                        _child.classList.toggle("active");
                    }
                }
            }
        },
        initialMarker() {
            if (!this.marker) {
                const parent = this.$el.parentElement;
                this._marker = ([...parent.children].indexOf(this.$el) + 1).toString();
            }
        }
    },
    mounted() {
        this.initialMarker();
    }
}
</script>

<template>
    <div class="mio-list-item" :class="'mio-list-item-' + (!marker ? _marker : marker)">
        <div class="mio-list-item-label" v-if="item.label" @click="handleClick">{{ item.label }}</div>
        <template v-else>
            <slot  />
        </template>
        <template v-if="item.children">
            <div class="mio-list-item-content" v-if="item.children.length > 0">
                <mio-list-item v-for="(subItem, subItemIndex) in item.children" :marker="!marker ? _marker + '-' + (subItemIndex + 1).toString() : marker + '-' + (subItemIndex + 1).toString()" :item="subItem" />
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.mio-list-item {
    box-sizing: border-box;
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .mio-list-item-label {
        box-sizing: border-box;
        flex: 0 0 32PX;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 8PX;
        font-size: 14PX;
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:hover {
            cursor: pointer;
            background-color: rgba(0, 156, 156, 0.1);
            border-radius: 4PX;
        }

        &.active {
            color: rgba(255, 127, 0, 1);
        }
    }

    .mio-list-item-content {
        box-sizing: border-box;
        flex: 1;
        width: 100%;
        margin-left: 16PX;
        display: flex;
        flex-direction: column;
    }
}
</style>
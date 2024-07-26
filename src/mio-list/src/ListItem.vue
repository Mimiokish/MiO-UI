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
    inject: [
        "activeMarker",
        "updateMethods"
    ],
    data() {
        return {
            _marker: this.marker
        }
    },
    methods: {
        handleSelect(marker) {
            const _newMarker = marker.split("-");
            const _latestMarker = this.activeMarker.split("-");
            // console.log("New: ", _newMarker.join("-"));
            // console.log("Latest: ", this.activeMarker);
            const newLen = _newMarker.length;
            const latestLen = _latestMarker.length;
            // console.log("New Length: ", newLen);
            // console.log("Latest Length: ", latestLen);

            if (latestLen === 0) {
                this.updateMethods.active(_newMarker.join("-"));
            } else {
                if (_newMarker.join("-") === _latestMarker.join("-")) {
                    // trigger when the latest marker is same as the new marker and latest has children node opened
                    const _nodeChildren = document.getElementById("MiO-List-Item-Children-" + _newMarker.join("-"));
                    if (_nodeChildren) {
                        _nodeChildren.classList.toggle("expend");
                    }
                } else {
                    if (newLen === latestLen - 1) {
                        this.updateMethods.deactivate(_latestMarker.join("-"));
                        this.updateMethods.activate(_newMarker.join("-"));

                        this.testLastSelectedNodeHasChildrenOpened(_newMarker.join("-"));
                    } else {
                        this.updateMethods.deactivate(_latestMarker.join("-"));
                        this.updateMethods.activate(_newMarker.join("-"));
                    }

                    this.updateMethods.active(_newMarker.join("-"));
                    // this.testLastSelectedNodeHasChildrenOpened(_newMarker.join("-"));
                    // const firstDiffIdx = this.findDifferentIndex(_newMarker.join("-"), _latestMarker.join("-"));
                }
            }
        },
        /**
         * @condition the latest marker is longer than the new marker, and it is children node of new marker
         * @description test whether the last-second marker of latest marker is same as the new marker
         * @example latest marker: 1-2-3-4, new marker: 1-2-3
         */
        testLastSelectedNodeHasChildrenOpened(marker) {
            const _newMarker = marker.split("-");
            const _latestMarker = this.activeMarker.split("-");

            let pass = true;
            const newLen = _newMarker.length;
            for (let newIdx = 0; newIdx < newLen; newIdx++) {
                if (_newMarker[newIdx] !== _latestMarker[newIdx]) {
                    pass = false;
                    return;
                }
            }

            if (pass) {
                const _nodeChildren = document.getElementById("MiO-List-Item-Children-" + _newMarker.join("-"));
                if (_nodeChildren) {
                    _nodeChildren.classList.remove("expend");
                }
            }
        },
        findDifferentIndex(newMarker, latestMarker) {
            const _newMarker = newMarker.split("-");
            const _latestMarker = latestMarker.split("-");

            const newLen = _newMarker.length;
            const latestLen = _latestMarker.length;

            // return the different index
            let firstDiffIdx = -1;
            const minLen = Math.min(newLen, latestLen);
            for (let idx = 0; idx < minLen; idx++) {
                if (_newMarker[idx] !== _latestMarker[idx]) {
                    firstDiffIdx = idx;
                    return firstDiffIdx;
                }
            }

            // return the different index if the length is different
            if (newLen !== latestLen) {
                firstDiffIdx = minLen;
                return firstDiffIdx;
            }

            // return no difference
            return firstDiffIdx;
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
    <div class="mio-list-item" :id="'MiO-List-Item-' + (!marker ? _marker : marker)">
        <div class="mio-list-item-content" :id="'MiO-List-Item-Content-' + (!marker ? _marker : marker)" v-if="item.label" @click="handleSelect((!marker ? _marker : marker))">{{ item.label }}</div>
        <template v-else>
            <slot  />
        </template>
        <template v-if="item.children">
            <div class="mio-list-item-children" :id="'MiO-List-Item-Children-' + (!marker ? _marker : marker)" v-if="item.children.length > 0">
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

    .mio-list-item-content {
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

    .mio-list-item-children {
        box-sizing: border-box;
        height: 0;
        width: 100%;
        margin-left: 16PX;
        display: flex;
        flex-direction: column;

        &.expend {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>

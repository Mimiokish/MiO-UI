const GenerateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const GetViewportSize = () => {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
}

const GetNodePosition = (node) => {
    const _node = node;

    if (_node) {
        const _nodeRect = _node.getBoundingClientRect();
        const _nodeTop = _nodeRect.top;
        const _nodeBottom = _nodeRect.bottom;
        const _nodeLeft = _nodeRect.left;
        const _nodeRight = _nodeRect.right;

        const _viewportWidth = document.documentElement.clientWidth;
        const _viewportHeight = document.documentElement.clientHeight;

        const _viewportTop = 0;
        const _viewportBottom = _viewportHeight;
        const _viewportLeft = 0;
        const _viewportRight = _viewportWidth;

        return {
            top: _nodeTop - _viewportTop,
            bottom: _viewportBottom - _nodeBottom,
            left: _nodeLeft - _viewportLeft,
            right: _viewportRight - _nodeRight
        };
    }
}

export default {
    GenerateUUID: GenerateUUID,
    GetViewportSize: GetViewportSize,
    GetNodePosition: GetNodePosition
}

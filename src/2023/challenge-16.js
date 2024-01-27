function transformTree(tree) {
    function transformTree(i = 0) {
        const value = tree[i];

        if (typeof value !== "number") {
            return null;
        }

        return {
            value,
            right: transformTree(2 * i + 2),
            left: transformTree(2 * i + 1),
        };
    }

    const result = transformTree();

    return result;
}
function optimizeIntervals(intervals) {
    return intervals
        .sort((a, b) => a[0] - b[0])
        .reduce((merged, current) => (
            current[0] <= merged[merged.length - 1][1]
                ? merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], current[1])
                : merged.push(current),
            merged
        ), [intervals[0]]);
}
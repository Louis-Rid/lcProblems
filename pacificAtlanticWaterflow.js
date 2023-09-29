var pacificAtlantic = function (heights) {
    var res = [];
    var H = heights.length;
    var W = heights[0].length;


    var pacific = new Set();
    var atlantic = new Set();

    function dfs(y, x, prevHeight, set) {
        if (y >= H || x >= W || x < 0 || y < 0) return;
        var curHeight = heights[y][x];
        if (curHeight < prevHeight) return;


        var index = x + y * W;
        if (set.has(index)) return;
        set.add(index);

        dfs(y + 1, x, curHeight, set);
        dfs(y - 1, x, curHeight, set);
        dfs(y, x + 1, curHeight, set);
        dfs(y, x - 1, curHeight, set);
    }

    // Atlantic
    for (let i = 0; i < H; i++) dfs(i, W - 1, 0, atlantic);
    for (let i = 0; i < W; i++) dfs(H - 1, i, 0, atlantic);

    // Pacific
    for (let i = 0; i < H; i++)  dfs(i, 0, 0, pacific);
    for (let i = 0; i < W; i++)  dfs(0, i, 0, pacific);

    atlantic.forEach(val => {
        if (pacific.has(val)) {
            let x = val % W;
            let y = Math.floor(val / W)
            res.push([y, x])
        }
    })

    return res;
};
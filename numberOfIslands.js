var numIslands = function (grid) {
    var res = 0;
    var H = grid.length;
    var W = grid[0].length;

    function dfs(y, x) {
        if (x >= W || y >= H || x < 0 || y < 0) return;

        var cur = grid[y][x];
        if (cur == "0") return;
        grid[y][x] = "0";

        dfs(y - 1, x);
        dfs(y + 1, x);
        dfs(y, x - 1);
        dfs(y, x + 1);
    }


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                dfs(i, j);
                res++;
            }
        }
    }

    return res;
};
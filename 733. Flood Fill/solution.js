/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

//Time: O(m*n)
//Space: O(m*n)

var floodFill = function(image, sr, sc, color) {
    let oldColor = image[sr][sc];
    let newColor = color;

    if(oldColor == newColor)
        return image;

    fill(image, sr, sc, oldColor, newColor);
    return image;
    
};

let fill = function(image, sr, sc, oldColor, newColor) {
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;

    if(image[sr][sc] !== oldColor) return;

    image[sr][sc] = newColor;

    fill(image, sr-1, sc, oldColor, newColor);
    fill(image, sr+1, sc, oldColor, newColor);
    fill(image, sr, sc-1, oldColor, newColor);
    fill(image, sr, sc+1, oldColor, newColor);

}
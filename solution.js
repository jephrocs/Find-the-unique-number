findUniq = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] != arr[1] && arr[0] != arr[2]) {
            return arr[0]
        } else if (arr[0] != arr[i]) {

            return arr[i]
        }
    }
}
function examResults(marks) {
    let results;
    if (marks >= 90) {
        results = "A";
        console.log(results)
    } else if (marks >= 80 && marks < 90) {
        results = "B",
            console.log(results)
    } else if (marks >= 70 && marks < 80) {
        results = "C";
        console.log(results);
    } else if (marks >= 60 && marks < 70) {
        results = "D";
        console.log(results)
    } else if (marks >= 50 && marks < 60) {
        results = "E";
        console.log(results)
    } else {
        results = "F";
        console.log(results)
    }
    return results;
}
examResults(49)
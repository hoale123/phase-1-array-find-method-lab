function superbowlWin(record) {
    // const result = record.find(record => record.result === "W");
    // return !!result ? result.year : undefined;
    const result = record.find(record => record.result === "W")
    if (result) {
        return result.year
    }
}

// !!result take in account of undefined
// !result would only take in account of true false

  //cant use record.result because its in array.


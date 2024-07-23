function demoSet() {

    s = new Set([12, 13, 34, 45]);
    v = s.values();

    for (let p of v) {
        console.log(p);
    }
}

demoSet();

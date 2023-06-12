function test(document: unknown) {
    if (typeof document === 'string') {
        document.toUpperCase() //here we can use all the string methods
    }
    else {
        console.log(document);

    }
}
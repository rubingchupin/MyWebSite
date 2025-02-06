function IEVersion() {
    if (document.documentMode) return document.documentMode;
}
if (IEVersion()) {
    window.location = '.../forie.html'
}
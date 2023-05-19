export { group }
function group() {
    console.log('Export nomeado não-inline (agrupado)');
}

export default exportDefault;
function exportDefault() {
    console.log('Export default não-inline');
}

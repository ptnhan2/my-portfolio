const sorting = (arr, type) => {
    const sorted = [...arr];
    if(type == "asc") {
        return sorted.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    } else {
        return sorted.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    }
}


export default sorting;
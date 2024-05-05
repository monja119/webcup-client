export const format_date_time = (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}` + ' ' + `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
}

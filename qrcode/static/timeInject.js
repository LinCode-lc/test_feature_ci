function timeInject(key) {
    let value = null;
    if (key === "outTime") value = dayjs().format('YYYY-MM-DD HH:00');
    else if (key === "backTime") value = dayjs().add(80, 'minute').format('YYYY-MM-DD HH:00');
    else if (key === "applyTime") value = dayjs().subtract(1, 'hour').format('YYYY-MM-DD HH:mm');
    return value;
}
export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let dict = new Map();
    dict.set('I', parseInt(1))
        .set('V', parseInt(5))
        .set('X', parseInt(10))
        .set('L', parseInt(50))
        .set('C', parseInt(100))
        .set('D', parseInt(500))
        .set('M', parseInt(1000));
    for (let i = 0; i <= str.length - 1; i++) {
        if (dict.get(str[i]) < dict.get(str[i + 1])) {
            result -= parseInt(dict.get(str[i]), 10);
        } else {
            result += parseInt(dict.get(str[i]), 10);
        }
    }
    return result;
}

export default function checkWordInText(text, word) {
    // تبدیل متن و کلمه به حروف کوچک برای مقایسه غیر حساس به بزرگی و کوچکی حروف
    const lowercaseText = text.toLowerCase();
    const lowercaseWord = word.toLowerCase();

    // جستجو برای وجود کلمه در متن
    if (lowercaseText.includes(lowercaseWord)) {
        return true;
    } else {
        return false;
    }
}
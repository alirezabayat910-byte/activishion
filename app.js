// اتصال به Telegram WebApp
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand(); // باز شدن تمام‌صفحه

    // دریافت اطلاعات کاربر
    const user = tg.initDataUnsafe?.user;
    if (user) {
        console.log('کاربر تلگرام:', user.first_name, user.last_name, user.username);
    }

    // دکمه اصلی تلگرام (MainButton)
    tg.MainButton.setText('مشاهده اخبار');
    tg.MainButton.onClick(() => {
        // اسکرول به بخش اخبار
        document.querySelector('.news-grid').scrollIntoView({ behavior: 'smooth' });
    });
    tg.MainButton.show();

    // دکمه بازگشت (BackButton)
    tg.BackButton.onClick(() => {
        tg.close();
    });
}

// مدیریت دکمه ورود با تلگرام
document.getElementById('tg-login-btn').addEventListener('click', () => {
    if (tg) {
        tg.showAlert('شما از طریق تلگرام وارد شده‌اید.');
    } else {
        // اگر در تلگرام باز نشده باشد، کاربر را به ربات هدایت کنید
        window.open('https://t.me/YourBotUsername', '_blank');
    }
});
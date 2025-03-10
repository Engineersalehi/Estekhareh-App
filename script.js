document.getElementById("estekharehBtn").addEventListener("click", function() {
    let responses = ["بله", "خیر", "خوب", "بد", "معمولی", "شاید خوب", "شاید بد"];
    let randomIndex = Math.floor(Math.random() * responses.length);
    document.getElementById("result").innerText = responses[randomIndex];
});

// تغییر زبان صفحه
function changeLanguage(lang) {
    let translations = {
        fa: { title: "استخاره با تسبیح منسوب به امام زمان", button: "استخاره بگیر", about: "درباره ما", contact: "تماس با ما:", email: "ایمیل:" },
        en: { title: "Istikhara with Prayer Beads", button: "Get Istikhara", about: "About Us", contact: "Contact Us:", email: "Email:" },
        ar: { title: "استخارة بمسبحة منسوبة للإمام المهدي", button: "خذ الاستخارة", about: "معلومات عنا", contact: "اتصل بنا:", email: "البريد الإلكتروني:" },
        da: { title: "استخاره با تسبیح امام زمان", button: "استخاره بگیر", about: "درباره ما", contact: "تماس با ما:", email: "ایمیل:" }
    };

    document.querySelector("h1").innerText = translations[lang].title;
    document.getElementById("estekharehBtn").innerText = translations[lang].button;
    document.querySelector(".about h2").innerText = translations[lang].about;
    document.querySelector(".about p:nth-child(2)").innerText = translations[lang].contact + " ☎️ ۰۹۹۸*۴۳۹۶۸۸";
    document.querySelector(".about p:nth-child(3)").innerText = translations[lang].email + " mohammadravisalehi@gmail.com";
}

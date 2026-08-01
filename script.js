function toggleAI(){

    let chat = document.getElementById("aiChat");

    if(chat.style.display === "block"){
        chat.style.display = "none";
    }
    else{
        chat.style.display = "block";
    }

}

const kitchenAnswers = [

{
keywords:["انواع المطابخ","أنواع المطابخ","المطابخ","نوع مطبخ","نوع المطبخ","اشكال المطابخ","خشب","HPL","Polyback","Acopa","الومنيوم","ألومنيوم","كلادينج"],
answer:`نوفر مطابخ خشب (HPL - Polyback - Acopa) ومطابخ ألومنيوم (كلادينج والألومنيوم).<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["الخامات","الخامة","خامات","نوع الخامات","المواد"],
answer:`الخامات المتوفرة لدينا هي: HPL - Polyback - Acopa - كلادينج - ألومنيوم.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["الرخام","رخام","جرانيت","رخام صناعي","رخام طبيعي"],
answer:`نوفر جرانيت، رخام طبيعي، ورخام صناعي.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["الاكسسوارات","الإكسسوارات","اكسسوارات","اكسسوار","مفصلات","ماجيك كورنر","حامل توابل","حامل كاسات","باسكت","توري زيت"],
answer:`نوفر مفصلة هيدروليك، مفصلات، توري زيت، باسكت قمامة، ماجيك كورنر، مجارى، حامل توابل، حامل كاسات وغيرها.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["السعر","الاسعار","الأسعار","بكام","كام","تكلفة","سعر المطبخ"],
answer:`الأسعار تبدأ من 49,000 جنيه وحتى 85,000 جنيه حسب المقاس والخامة.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["الضمان","ضمان","مدة الضمان"],
answer:`الضمان 20 سنة ضد عيوب الصناعة.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["مدة التنفيذ","التنفيذ","هيخلص امتى","كام يوم","ميعاد التنفيذ"],
answer:`مدة التنفيذ من 10 أيام إلى 25 يومًا.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
},

{
keywords:["الصيانة","صيانة","خدمة ما بعد البيع"],
answer:`تتوفر خدمة الصيانة عند الحاجة.<br><br>

لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br>

<a href="https://wa.me/201044050184" target="_blank">01044050184</a>`
}

];


            function askKitchenAI() {

                const input = document.getElementById("userQuestion");
                const chat = document.getElementById("aiBody");
            
                let question = input.value.trim();
            
                if (question === "") return;
            
                chat.innerHTML += `
                <div class="user-message">
                    ${question}
                </div>
                `;
            
                let found = false;
            
                for (let item of kitchenAnswers) {
            
                    if (item.keywords.some(word => question.toLowerCase().includes(word.toLowerCase()))) {
            
                        chat.innerHTML += `
                        <div class="bot-message">
                            ${item.answer}
                        </div>
                        `;
            
                        found = true;
                        break;
                    }
            
                }
            
                if (!found) {
            
                    chat.innerHTML += `
                    <div class="bot-message">
                    🤖 عذرًا، لم أتمكن من فهم السؤال.<br><br>
            
                    لو حضرتك حابب تعرف تفاصيل أكتر تواصل معنا على:<br><br>
            
                    <a href="https://wa.me/201044050184" target="_blank">
                    01044050184
                    </a>
            
                    </div>
                    `;
            
                }
            
                chat.scrollTop = chat.scrollHeight;
                input.value = "";
            
            }
            
                const popup = document.getElementById("imagePopup");
            const popupImg = document.getElementById("popupImg");
            const closeImage = document.querySelector(".close-image");
            
            document.querySelectorAll(".kitchen-card img").forEach(img => {
            
                img.onclick = function () {
            
                    popup.style.display = "flex";
                    popupImg.src = this.src;
            
                };
                const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }

    });

});
            
            });
            
            closeImage.onclick = function () {
            
                popup.style.display = "none";
            
            };
            
            popup.onclick = function (e) {
            
                if (e.target === popup) {
                    popup.style.display = "none";
                }
            
            };
        
            
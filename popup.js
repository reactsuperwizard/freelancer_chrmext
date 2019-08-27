document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function (tabs) {
        var itemsData = [
        {
            label: 'Django, Flask, Python',
            content: `⭐⭐⭐Hi, there!⭐⭐⭐\r\n\r\nAs a senior Django and React developer, who recommended the reputation of "Top 1% Developer", I read the description and got understood correctly.\r\nStrong knowledge and rich experiences in Python, Django, Flask as well as React, Redux, Apollo, Graph QL.\r\n\r\nPlease check my previous Django and React projects.\r\n\r\n     http://cogmento.com\r\n     http://clublink.com\r\n     http://tracks-qa.catchmedia\r\n     https://www.shermanstravel.com\r\n     https://www.onepeloton.com\r\n     http://www.easyclosets.com/\r\n         ...............................\r\n\r\nLooking forward to discussing more details over chat.\r\nI'll complete your all ideas successfully with high quality and work until SATISFACTION.\r\n\r\nONCE YOU HIRE ME, I WILL DO MY BEST.\r\nRegards.\r\n\r\nMingqi Zhao.\r\n`,
            style:'btn-success',
        }, {
            label: 'Angular',
            content: `⭐⭐⭐Hello, there!⭐⭐⭐\r\nAfter understanding the description, I've got confident to be able to complete the job.\r\n\r\nExpertise and rich experiences in not only Angular 4 +, Angular.js but also Express/Nodejs, SQL / NoSQL, Firebase / Heroku, Docker, and etc...\r\n\r\nThese are my previous works.\r\n\thttp://otrtwizard.com\r\n\thttps://www.icurae.com\r\n\thttps://www.thefactorydoor.com\r\n\thttps://app.enhancetherapy.com\r\n\thttps://floward.com\r\n\thttps://www.nocknock.com/\r\n...........................................\r\nI'll give you satisfy your all ideas wonderfully in budget and timeframe.\r\nWaiting to discuss more details over chat.\r\n\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-warning',
        }, {
            label: 'Ionic, Flutter',
            content: `⭐⭐⭐Hello.⭐⭐⭐\r\nI have the expertise and rich experiences in Ionic v3+ and Flutter as a senior web developer.\r\n\r\nAfter clearly understood, I've got very interested and confidence in this project.\r\n\r\n\thttps://play.google.com/store/apps/details?id=com.ionicbucket.firenews&amp;hl=en\r\n\thttps://ionicbucket-newsapp.firebaseapp.com/#/login\r\n\thttps://github.com/OliveIT/firenews-admin\r\n\thttps://play.google.com/store/apps/details?id=com.verbosetech.cookfu_ionic\r\n\thttps://play.google.com/store/apps/details?id=com.verbosetech.cookfu_store_ionic\r\n\r\nI'll satisfy your all ideas completely in budget and timeframe.\r\nPlease check my reviews which left from my previous clients.\r\n\r\nLooking forward to hearing back from you soon.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-info',
        }, {
            label: 'Laravel PHP',
            content: `⭐⭐⭐Hello, Client!⭐⭐⭐\r\n\r\nAs a senior full-stack developer, I have rich experiences in Laravel, Php Core, MVC, and Angular.\r\n\r\nAfter understanding the description, I got confident that I can complete the project successfully.\r\n\r\nAs you can see my reviews, my before clients have never been kept frustrated by my work.\r\n\r\nPlease check my previous works.\r\n    http://www.myfcpower.com\r\n    http://mts.lass.technology/\r\n    http://scs.gatenetwork.it/\r\n    https://ozzy.vip\r\n    https://fax.beslisapp.nl/\r\n    https://removebounce.com\r\n\r\nI'll give you satisfaction with high-quality code and correct deadline.\r\nWaiting to discuss more detail over chat.\r\n\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-primary',
        },{
            label: 'Common 1',
            content: `⭐⭐⭐Hello, client.⭐⭐⭐\r\nI am a Senior Mobile developer with 10+ years of software development experiences.\r\nAfter reading your job description carefully, I'm sure I am the right person for this project.\r\n\r\nExpertise in .....\r\n\r\nAs you can see my reviews, Clients have never been frustrated with my work, and they always gave me "⭐⭐⭐⭐⭐" marks without hesitating.\r\n\r\nHIRE ME, AND YOU WILL GET AN EXCELLENT RESULT ON TIME.\r\nHoping to discuss in more details over private chat.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-success',
        }, {
            label: 'React Native',
            content: `Hello, client.\r\nI am a Senior Mobile/Web developer with 10+ years of software development career.\r\nAfter reading your job description carefully, I am very proper developer, who is crazy with willing to work with you.\r\nExpertise in MERN, React JS as Front-End with 3 + years of experiences.\r\nFront End\r\n\r\n\t https://www.lyoness.com/eu\r\n\t https://www.goodhire.com/ \r\n\t http://www.yeticycles.com/\r\n\t http://tracks-qa.catchmedia\r\n\t https://www.shermanstravel.com\r\n\t https://www.onepeloton.com\r\nMERN\r\n\t https://www.stanza.co/\r\n\t https://sothebyshomes.com/\r\n\r\nAs you can see my reviews, Clients have never been frustrated with my work, and they always gave me "⭐⭐⭐⭐⭐" marks without hesitating.\r\n\r\nONCE YOU GIVE ME A CHANCE TO WORK WITH YOU, I WILL DO MY BEST.\r\n\r\nI will never charge your money without any result and guarantee my work with high-quality and scalable and \r\nI hope we can discuss in more detail over chat.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-danger',
        }, {
            label: 'WordPress',
            content: `⭐⭐⭐Hi there⭐⭐⭐ \r\nI'm a famous WordPress developer, who built more than 99 products for my clients.\r\nAlso, I have made several products to sell on an online market and those are best sellers on the market.\r\n\r\n\t http://www.soaptheme.net/wordpress/travelo\r\n\t http://www.soaptheme.net/wordpress/citytours\r\n\r\nMy clients have never been frustrated with my work and I have kept in my mind it.\r\nI can assist you with my skills and can fulfill your requirements on time.\r\nLook forward to hearing back from you.\r\nThanks.\r\n`,
            style:'btn-light',
        }, {
            label: 'React',
            content: `⭐Hello, Client ⭐\r\nI have rich experiences in the development of Mobile/Web app\r\nAs you can see my reviews, my before clients never frustrated with my work, so that I can satisfy your all good ideas wonderfully.\r\nExpertise in React, Redux, Apollo, Graph QL,\r\n\t http://tracks-qa.catchmedia\r\n\t https://www.shermanstravel.com\r\n\t https://www.onepeloton.com\r\n\t https://bredariol.be\r\n\t https://playven.com\r\n\t https://www.flyfar.ca\r\nIF YOU CHOOSE ME, I WILL DO MY BEST.\r\nSincerely, I hope we can discuss in more detail about your project.\r\nWaiting for your reply\r\n`,
            style:'btn-dark',
        }, {
            label: 'AWS',
            content: `Hey Client.\r\nI know you're busy and charge good money for consulting\r\nI have 4+ years of experience in AWS Lambda, GATEWAY API, RDS, Dynamic DB, S3.\r\nEspecially I did just quite task similar to your idea of ... before.\r\n\r\nIf you believe and award me,  I will do everything in my power.\r\nI firmly confirm you will call me and discuss this project in detail.\r\nThanks for reviewing my words.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-primary',
        }, {
            label: `Common 2`,
            content: `"Everyone can write code, but few of them know how to write good, readable and scalable code." - This is my motto and slogan. \r\n⭐ Hi!⭐ \r\nMy name is MingQi, a professional full-stack web developer, with 5 years of experiences.\r\nAfter reviewed the project’s requirement, I got very interesting and I can start right now \r\nExpertise in ...\r\nMy clients have never been frustrated with my results and honesty so they provide me only full marks "⭐⭐⭐⭐⭐". \r\nONCE YOU SELECT ME, I WILL DO MY BEST UNTIL YOU HAVE ⭐"SATISFACTION"⭐.\r\nLooking forward to hearing back from you. \r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-secondary',
        }];
                   
        function copyToClipboard(element) {
            
            

            var $temp = $("<textarea>");
            var brRegex = /<br\s*[\/]?>/gi;
            $("body").append($temp);
            $temp.val($(element).html().replace(brRegex, "\r\n")).select();
            document.execCommand("copy");
            $temp.remove();
        }        

        function loadData(callback) {
            chrome.storage.sync.get("jts", function (Items) {
                callback(Items);
            });
        }

        function addData(item) {
            loadData((Items) => {
                Items[item.label] = item.content;
                chrome.storage.sync.set({
                    "jts": Items
                }, function (Items) {
                    alert('saved data');
                });
            })
        }

        function deleteData(item) {
            loadData((Items) => {
                delete Items[item.label];
                chrome.storage.sync.set({
                    "jts": Items
                }, function (Items) {
                    alert('saved data');
                });
            })
        }

        function attachedElement(parentEle, index, Item){
            let label = Item.label;
            let content = Item.content;
            let style = Item.style;
            
            div = document.createElement('div');
            p = document.createElement('textarea');
            p.setAttribute("id", "p" + index);
            p.setAttribute("style", "display: none;");
            p.innerText = content;
            button = document.createElement('button');
            button.setAttribute("id", "clickToClipBoard" + index);
            button.className = "btn btn-sm " + style;
            button.innerText = label;
            div.appendChild(p);
            div.appendChild(button);
            parentEle.appendChild(div);            
        }

        function settingContentIsActive() {
            let ele = document.getElementById('setting_content');
            if (ele.className.includes("inactive")) {
                return false;
            }
            return true;
        }

        function show_hide_button_click() {
            let ele = document.getElementById('setting_content');
            if (settingContentIsActive()) {
                ele.className = 'inactive';
                document.getElementById('show_hide').innerText = 'Show';
            } else {
                ele.className = 'active';
                document.getElementById('show_hide').innerText = 'Hide';
            }
        }

        function add_content_buton() {
            let add_label = document.getElementById('add_label');
            let add_content = document.getElementById('add_content');
            if (!add_label || add_label.text.length() == 0 || !add_content || add_content.text.length() == 0)
                return;

            addData({
                label: 'test',
                content: 'This is test.'
            });
        }

        function init() {
            loadData((Items) => {
                Items = itemsData;
                if (Items && Items.length) {
                    let clip_content_ele = document.getElementById('clip_content');
                    for (let i = 0; i < Items.length; i++) {
                        attachedElement(clip_content_ele, i, Items[i]);
                    }
                    for (let index = 0; index < Items.length; index ++) {                        
                        var clickToClipBoardText = "clickToClipBoard";
                        document.getElementById(clickToClipBoardText + index).addEventListener('click', function(event){
                            let selector = '#p' + event.target.id.substr(clickToClipBoardText.length)
                            copyToClipboard(selector);
                        });
                    }
                }
            })
            // document.getElementById("show_hide").addEventListener('click', show_hide_button_click());
            // document.getElementById("add_content_buton").addEventListener('click', add_content_buton());
        }

        init();
    });
})
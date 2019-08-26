document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function (tabs) {
        var itemsData = [{
            label: 'Laravel PHP',
            content: `⭐Hello, Client ⭐\r\nI have rich experiences in Laravel, Php Core, MVC, and Angular programming.\r\nAs you can see my reviews, my before clients never frustrated with my work, so that I can satisfy your all good ideas wonderfully.\r\n\r\nPlease check my previous Laravel and Laravel RestAPI Project.	\r\n\t http://www.myfcpower.com\r\n\t http://mts.lass.technology/\r\n\t http://scs.gatenetwork.it/\r\n\t https://ozzy.vip\r\n\t https://fax.beslisapp.nl/\r\n\t https://removebounce.com\r\n\r\nIF YOU CHOOSE ME, I WILL DO MY BEST.\r\n\r\nSincerely, I hope we can discuss in more detail about your project.\r\nWaiting for your reply.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-primary',
        }, {
            label: 'Django, Flask, Python',
            content: `⭐⭐⭐Hi, there!⭐⭐⭐\r\nI am MingQi, Senior full-stack Developer, who recommended and got the reputation of "Top 1% Developer" by this community.\r\n\r\nExpertise in Python, Django, Flask and please check my previous Django and Django RestAPI Project.\r\n\r\n\t https://www.hhrooftopbar.com\r\n\t http://clublink.com\r\n\t http://cogmento.com\r\n\t http://www.easyclosets.com/\r\n\t https://www.realbuzz.com/\r\n\r\nPlease contact me to discuss furthermore.\r\nI will implement your all ideas wonderfully with high quality, affordable and work until SATISFACTION.\r\nONCE YOU HIRE ME, I WILL DO MY BEST.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-secondary',
        }, {
            label: 'Common 1',
            content: `⭐⭐⭐Hello, client.⭐⭐⭐\r\nI am a Senior Mobile developer with 10+ years of software development experiences.\r\nAfter reading your job description carefully, I'm sure I am the right person for this project.\r\n\r\nExpertise in .....\r\n\r\nAs you can see my reviews, Clients have never been frustrated with my work, and they always gave me "⭐⭐⭐⭐⭐" marks without hesitating.\r\n\r\nHIRE ME, AND YOU WILL GET AN EXCELLENT RESULT ON TIME.\r\nHoping to discuss in more details over private chat.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-success',
        }, {
            label: 'React Native',
            content: `Hello, client.\r\nI am a Senior Mobile/Web developer with 10+ years of software development career.\r\nAfter reading your job description carefully, I am very proper developer, who is crazy with willing to work with you.\r\nExpertise in MERN, React JS as Front-End with 3 + years of experiences.\r\nFront End\r\n\r\n\t https://www.lyoness.com/eu\r\n\t https://www.goodhire.com/ \r\n\t http://www.yeticycles.com/\r\n\t http://tracks-qa.catchmedia\r\n\t https://www.shermanstravel.com\r\n\t https://www.onepeloton.com\r\nMERN\r\n\t https://www.stanza.co/\r\n\t https://sothebyshomes.com/\r\n\r\nAs you can see my reviews, Clients have never been frustrated with my work, and they always gave me "⭐⭐⭐⭐⭐" marks without hesitating.\r\n\r\nONCE YOU GIVE ME A CHANCE TO WORK WITH YOU, I WILL DO MY BEST.\r\n\r\nI will never charge your money without any result and guarantee my work with high-quality and scalable and \r\nI hope we can discuss in more detail over chat.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-danger',
        }, {
            label: 'Angular',
            content: `⭐⭐⭐Hello.⭐⭐⭐\r\nWith very interested and confidence in this project, I can satisfy your all ideas wonderfully as you need in budget and timeframe.\r\n\r\nExpertise and rich Experiences in angular, angular.js, CouchDB and Touch DB, Firebase, Heroku, Docker(Ngnix).\r\n\r\n\t http://otrtwizard.com\r\n\t https://www.icurae.com\r\n\t https://www.thefactorydoor.com\r\n\t https://app.enhancetherapy.com\r\n\t https://floward.com\r\n\t https://www.nocknock.com/\r\n\r\nONCE YOU CHOOSE ME, I WILL DO MY BEST.\r\nWaiting for your response.\r\nRegards.\r\nMingqi Zhao\r\n`,
            style:'btn-warning',
        }, {
            label: 'Ionic, React Native, Flutter',
            content: `⭐⭐⭐Hello.⭐⭐⭐\r\nWith very interested and confidence in this project, I can satisfy your all ideas wonderfully as you need in budget and timeframe.\r\n\r\nExpertise and rich Experiences in Ionic v1~v5, React Native, Flutter.\r\n\r\n\t https://play.google.com/store/apps/details?id=com.ionicbucket.firenews&hl=en\r\n\t https://ionicbucket-newsapp.firebaseapp.com/#/login\r\n\t https://github.com/OliveIT/firenews-admin\r\n\t https://play.google.com/store/apps/details?id=com.verbosetech.cookfu_ionic\r\n\t https://play.google.com/store/apps/details?id=com.verbosetech.cookfu_store_ionic\r\n\r\nONCE YOU CHOOSE ME, I WILL DO MY BEST.\r\nWaiting for your response.\r\nBest Regards.\r\nMingqi Zhao\r\n`,
            style:'btn-info',
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
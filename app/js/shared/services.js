(function() {
'use strict';

    angular
        .module('app')
        .factory('PageDataService', PageDataService);

    PageDataService.$inject = ['PageDetails'];
    function PageDataService(PageDetails) {
        var service = {}
        var pages = [];
        service.getPages = function() {
            return pages;
        }
        
        function setupData() {
            pages.push({
                details: new PageDetails({
                    "label": "pedro",
                    "logo": 'img/pedro-logo-b.png',
                    "candidato": 'Pedro Kuczynki',
                    "partido": "Peruanos por el Kambio",
                    "propuestas": [
                        'Mejorar sustancialmente la seguridad ciudadana',
                        'Restablecer el dinamismo de nuestra economía',
                        'Implementar reformas para terminar con la corrupción',
                        'Inversión social para reducir la desigualdad'
                        ],
                    "color": '#FC178F',
                    "candidatopic": 'img/pedro-card.png',
                    "vicepics": ['img/martin-pic.png', 'img/mercedes-pic.png'],
                    "vicepresidentes": ['Martín Vizcarra', 'Mercedes Aráoz'],
                    "social_media": ['https://www.facebook.com/PPK-Peruanos-Por-el-Kambio-550068215134018/', 'https://twitter.com/ppkamigo', 'http://www.peruanosporelkambio.pe/'],
                    "tweeterid": "702562625855467520"
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "keiko",
                    "logo": 'img/keiko-logo-b.png',
                    "candidato": 'Keiko Fujimori',
                    "partido": "Fuerza Popular",
                    "propuestas": [
                        'Fortalecimiento del modelo económico pero con inclusión social.',
                        'Bono de protección alimentaria de S/. 125 a familias en extrema pobreza.',
                        'Programa Calle Segura con participación de las juntas vecinales.',
                        'Promoción de industrias alternativas, agricultura, turismo y la agroindustria.'
                        ],
                    "color": '#FF6600',
                    "candidatopic": 'img/keiko-card.png',
                    "vicepics": ['img/jose-pic.png', 'img/vladimiro-pic.png'],
                    "vicepresidentes": ['José Chlimper', 'Vladimiro Huaroc'],
                    "social_media": ['facebook.com/pfuerzapopular', 'https://twitter.com/PFuerzaPopular?ref_src=twsrc%5Etfw', 'http://keikofujimori.pe/'],
                    "tweeterid": "702563457313312768"
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "alan",
                    "logo": 'img/alan-logo-b.png',
                    "candidato": 'Alan García',
                    "partido": "APRA",
                    "propuestas": [
                        'Romper con las trabas burocráticas para la inversión con el fin de aumentar la ejecución',
                        'Crear un canon comunal y que la propiedad del suelo también incluya la del subsuelo',
                        'Reducir las altas tasas de intereses de las tarjetas de crédito.',
                        'Incremenetar la Remuneració Mínima Vital'
                        ],
                    "color": '#FC0204',
                    "candidatopic": 'img/alan-card.png',
                    "vicepics": ['img/lourdes-pic.png', 'img/david-pic.png'],
                    "vicepresidentes": ['Lourdes Flores', 'David Salazar'],
                    "social_media": ['https://www.facebook.com/PartidoApristaPeruanoORG', 'https://twitter.com/alangarciaperu', 'http://www.apra.org.pe/'],
                    "tweeterid": "702624555819401216"
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "alfredo",
                    "logo": 'img/alfredo-logo-b.png',
                    "candidato": 'Alfredo Barnechea',
                    "partido": "Acción Popular",
                    "propuestas": [
                        'Dinamizar la economía a través de la agricultura consolidando la tecnología.',
                        'Asegurar la educación y el empleo para favorecer el capital humano.',
                        'Bajar en 1% el Impuesto General a las ventas (IGV), del 18 al 17%.',
                        'Del 30% del IGV, el 3% será reinvertido para incremenetar la demanda de la mano de obra.'
                        ],
                    "color": '#CD3333',
                    "candidatopic": 'img/alfredo-card.png',
                    "vicepics": ['img/victor-pic.png', 'img/edmundo-pic.png'],
                    "vicepresidentes": ['Víctor García Belaúnde', 'Edmundo del Águila'],
                    "social_media": ['https://www.facebook.com/partidoaccionpopular?fref=ts', 'https://twitter.com/accionpopular', 'http://accionpopular.com.pe/'],
                    "tweeterid": "702624764179795968"
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "julio",
                    "logo": 'img/julio-logo-b.png',
                    "candidato": 'Julio Guzmán',
                    "partido": "Todos por el Perú",
                    "propuestas": [
                        'Diversificar la economía para tener Ingresos previsibles y crecientes para todos',
                        'Educar para descubrir los talentos de todos',
                        'Desarrollar la Conectividad para integrarnos al resto del país y al mundo',
                        'Mejorar el clima de negocios para todos'
                        ],
                    "color": '#804794',
                    "candidatopic": 'img/julio-card.png',
                    "vicepics": ['img/juana-pic.png', 'img/carolina-pic.png'],
                    "vicepresidentes": ['Juana Maura', 'Carolina Lizárraga'],
                    "social_media": ['https://www.facebook.com/julioguzman2016', 'https://twitter.com/julioguzmanperu', 'http://julioguzman.pe/'],
                    "tweeterid": "702624876675268608"                    
                })
            });
            
            pages.push({
                details: new PageDetails({
                    "label": "cesar",
                    "logo": 'img/cesar-logo-b.png',
                    "candidato": 'César Acuña',
                    "partido": "Alianza para el Progreso del Perú",
                    "propuestas": [
                        'Dar al Centro de Planeamiento Estratégico (Ceplan) rango de ministerio',
                        'Invertir en tecnología para subir un nivel más en el ciclo de producción',
                        'Implementar programas sociales para sectores no atendidos y con necesidades específicas',
                        'Comenzar la construcción de el "Tren bala" de Tacna a Tumbes'
                        ],
                    "vicepresidentes": ['Anel Townsend', 'Humberto Lay'],
                    "social_media": ['https://www.facebook.com/PeruAPP/app/425088890879889/', 'https://twitter.com/APP_Peru', 'http://www.app.pe/'],
                    "color": '#004B9C',
                    "candidatopic": 'img/cesar-card.png',
                    "vicepics": ['img/anel-pic.png', 'img/humberto-pic.png'],
                    "tweeterid": "702624969864261632"
                })
            });
            
        }
        
        service.getPage = function(name) {
            var result;
            angular.forEach(service.getPages(), function(page) {
                if (page.details.label === name) {
                    result = page; return;
                 };
            })
            return result;
        }

        var init = function () {
            setupData();
        };
        
        init();
        return service;
    }
})();


(function() {
'use strict';

    angular
        .module('app')
        .factory('TwitterService', TwitterService);

    TwitterService.$inject = ['$timeout'];
    function TwitterService($timeout) {
        var service = {}
        service.loadAllWidgets = function() {
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
         };

         service.destroyAllWidgets = function() {
            var $ = function (id) { return document.getElementById(id); };
            var twitter = $('twitter-wjs');
            if (twitter != null)
                twitter.remove();
         };
         return service;
    }
})();


(function() {
'use strict';

    angular
        .module('app')
        .factory('PollDataService', PollDataService);

    PollDataService.$inject = ['PollDetails'];
    function PollDataService(PollDetails) {
        var service = {}
        var candidatesData = [];
        
        service.getCandidates = function() {
            return candidatesData;
        }
        
       service.executeVote = function(name) {
           angular.forEach(candidatesData, function(candidate, index) {
               if (name == candidate.details.name && !candidate.details.selected) {
                   candidate.details.votes++;
                   candidate.details.selected = true;
                   return;                   
               }
           });
       }
       
       service.reverseVote = function(name) {
            angular.forEach(candidatesData, function(candidate, index) {
               if (name == candidate.details.name && candidate.details.selected) {
                   candidate.details.votes--;
                   candidate.details.selected = false;
                   return;                   
               }
           });
       }
        
        function loadCandidatesData() {
            candidatesData.push({
                details: new PollDetails({
                    "name": "Pedro Kuczynki",
                    "color": "#FC178F",
                    "picture": "img/pedro-card.png",
                    "votes": 90,
                    "percentage": "9%",
                    "selected": false
                })
            });
            
            candidatesData.push({
                details: new PollDetails({
                    "name": "Keiko Fujimori",
                    "color": "#FF6600",
                    "picture": "img/keiko-card.png",
                    "votes": 300,
                    "percentage": "30%",
                    "selected": false
                })
            });
            
            candidatesData.push({
                details: new PollDetails({
                    "name": "Alan García",
                    "color": "#FC0204",
                    "picture": "img/alan-card.png",
                    "votes": 40,
                    "percentage": "5%",
                    "selected": false
                })
            });
            
            candidatesData.push({
                details: new PollDetails({
                    "name": "Alfredo Barnechea",
                    "color": "#CD3333",
                    "picture": "img/alfredo-card.png",
                    "votes": 40,
                    "percentage": "4%",
                    "selected": false
                })
            });
            
            candidatesData.push({
                details: new PollDetails({
                    "name": "Julio Guzmán",
                    "color": "#804794",
                    "picture": "img/julio-card.png",
                    "votes": 180,
                    "percentage": "18%",
                    "selected": false
                })
            });
            
            candidatesData.push({
                details: new PollDetails({
                    "name": "César Acuña",
                    "color": "#004B9C",
                    "picture": "img/cesar-card.png",
                    "votes": 60,
                    "percentage": "6%",
                    "selected": false
                })
            });
        }
        
        
         var init = function () {
            loadCandidatesData();
        };
        
        init();
        return service;
    }
})();

(function() {
'use strict';

    angular
        .module('app')
        .factory('LeftAndTopService', LeftAndTopService);
        
    function LeftAndTopService() {
       var service = {};
       var current = 'candidatos';
       
       service.updateCurrent = function(name) {
           current = name;
       }
       service.getCurrent = function() {
           return current;
       }
       
       return service;
    }
})();

(function() {
'use strict';

    angular
        .module('app')
        .factory('GetUserDataService', GetUserDataService);
        
    GetUserDataService.$inject = ['UserDetails'];
    function GetUserDataService(UserDetails) {
        var service = {};
        var userData;
        
        function retrieveData() {
            userData = new UserDetails({
                "name": "Steve Lee Marreros",
                "state": "",
                "city": "",
                "street": "",
                "bio": "",
                "picture": ""
            });
        }
        
        service.getUserData = function () {
            return userData;
        }
        
        function init() {
            retrieveData();
        }
        init();
        return service;
    }
    
})();

(function() {
'use strict';

    angular
        .module('app')
        .factory('UpdatePictureService', UpdatePictureService);

    UpdatePictureService.$inject = ['localStorageService'];
    function UpdatePictureService(localStorageService) {
        var storageImageKey = "pic_localstorage";
        var storageUserDataKey = "userData_localstorage";
        var service = {};
        var path = null;
        service.picture = null;
        service.userData = null;
        
        service.storeImage = function(picture) {
            localStorageService.add(storageImageKey, picture);
            service.picture = picture;
        }
        
        service.retrievePic = function() {
            return localStorageService.get(storageImageKey);
        }
        
        service.storePicPath = function(picPath) {
            path = picPath;
        }
        
        service.retrievePicPath = function() {
            return path;
        }
        
        service.storeUserData = function(userData) {
            localStorageService.add(storageUserDataKey, userData);
            service.userData = userData;
        }
        
        service.getUserData = function() {
            return localStorageService.get(storageUserDataKey);
        }
        
        return service;

    }
})();
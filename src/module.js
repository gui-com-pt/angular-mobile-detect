(function(){
	angular
	.module('MobileDetect', [])
	.service('MobileDetectService', [function() {
                var md = new MobileDetect(window.navigator.userAgent);

                return {
                    mobile: function() {
                        return md.mobile() != null;
                    },
                    tablet: function() {
                        return md.tablet() != null;
                    },
                    phone: function() {
                        return md.phone() != null;
                    }
                }

        }])
})();
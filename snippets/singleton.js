(function() {

    'use strict';

    let utilWrapper = (function() {

        let utilServiceInstance;

        function UtilService() {
            let sessionToken, agentData;
        }

        UtilService.prototype.getCurrentTimestamp = function getCurrentTimestamp() {
            return new Date().getTime().toString();
        };

        return {
            getInstance() {
                if (!utilServiceInstance) {
                    utilServiceInstance = new UtilService(); 
                }
                return utilServiceInstance;
            }
        }
    })();

    let instance1 = utilWrapper.getInstance();
    let instance2 = utilWrapper.getInstance();

    console.log(instance1 === instance2);
})();

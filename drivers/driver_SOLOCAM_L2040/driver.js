const mainDriver = require('../main-driver');
const { DEVICE_TYPES } = require('../../../constants/device_types');


module.exports = class driver_SOLOCAM_L2040 extends mainDriver {
    deviceType() {
        return DEVICE_TYPES.SOLOCAM_L2040
    }
}
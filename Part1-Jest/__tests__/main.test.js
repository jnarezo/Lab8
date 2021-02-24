const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath', () => {
    test('if volume level = 3 and volume > 100', () => {
        expect(formatVolumeIconPath(101)).toMatch('./assets/media/icons/volume-level-3.svg')
    });

    test('if volume level = 3 and volume > 66', () => {
        expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg')
    });

    test('if volume level = 2 and volume = 66', () => {
        expect(formatVolumeIconPath(66)).toMatch('./assets/media/icons/volume-level-2.svg')
    });

    test('if volume level = 2 and 33 < volume <= 66', () => {
        expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg')
    });

    test('if volume level = 1 and volume = 33', () => {
        expect(formatVolumeIconPath(33)).toMatch('./assets/media/icons/volume-level-1.svg')
    });

    test('if volume level = 1 and 0 < volume <= 33', () => {
        expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg')
    });

    test('if volume level = 0 and volume = 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg')
    });

    test('if volume level = 0 and volume < 0', () => {
        expect(formatVolumeIconPath(-20)).toMatch('./assets/media/icons/volume-level-0.svg')
    });
});
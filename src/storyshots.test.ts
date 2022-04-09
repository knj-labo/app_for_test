import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const beforeScreenshot = (page: any) => {
    page.setViewport({ width: 1440, height: 960 })
}

initStoryshots({
    suite: 'Image storyshots',
    test: imageSnapshot({
        storybookUrl: 'http://localhost:6006',
    }),
})
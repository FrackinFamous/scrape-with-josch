import * as fs from 'fs'
import puppeteer from 'puppeteer'

const url = 'https://python-telegram-bot.org'
const filePath = 'PDF.pdf'

const main = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)

  // capture a full page editable pdf and save it
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
  })
  fs.writeFileSync(filePath, pdfBuffer)

  // capture screenshot of the entire page (including the part not visible in the viewport)
  const screenshotBuffer = await page.screenshot({ fullPage: true })
  // save screenshot to file
  fs.writeFileSync('screenshot.png', screenshotBuffer)

  // open screenshot in new tab
  const screenshotPath = `file://${process.cwd()}/screenshot.png`
  await page.goto(screenshotPath, { waitUntil: 'networkidle0' })
}

main()

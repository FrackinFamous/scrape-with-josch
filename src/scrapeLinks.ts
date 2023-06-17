import { createObjectCsvWriter } from 'csv-writer'
import puppeteer from 'puppeteer'
import { v4 as uuidv4 } from 'uuid'

const scrapeLinks = async (
  url: string,
  selector: string,
  outputPath: string
) => {
  const csvWriter = createObjectCsvWriter({
    path: outputPath,
    header: [
      { id: 'id', title: 'ID' },
      { id: 'link', title: 'Link' },
    ],
  })

  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitForSelector(selector)

  const linkHrefs = await page.$$eval(`${selector} a`, (anchors) =>
    anchors.map((anchor) => anchor.href)
  )

  const links = linkHrefs.map((href) => ({ id: uuidv4(), link: href }))

  await csvWriter.writeRecords(links)
  await browser.close()
  return outputPath
}

export default scrapeLinks

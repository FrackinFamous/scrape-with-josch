import fs from 'fs'
import scrapeLinks from './scrapeLinks'

const url = ''
const sideBarSelector = '.toc-tree'
const outputPath = `telegramBot.csv`

// open file docs.python-telegram-bot.org.csv and scrape each link
const scrapeLinksFromCsv = async (csvFilePath: string) => {
  

const main = async () => {
  const csvFilePath = await scrapeLinks(url, sideBarSelector, outputPath)
  console.log(`Links saved to ${csvFilePath}`)
}

main()


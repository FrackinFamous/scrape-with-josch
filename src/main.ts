import scrapeLinks from './scrapeLinks'

const url = 'https://docs.python-telegram-bot.org/en/stable/'
const sideBarSelector = '.toc-tree'

// dynamically name the output file based on the URL, starting with the second level domain
const outputPath = `./${url.split('/')[2]}.csv`

const main = async () => {
  const csvFilePath = await scrapeLinks(
    url,
    sideBarSelector,
    outputPath
  )
  console.log(`Links saved to ${csvFilePath}`)
}

main()

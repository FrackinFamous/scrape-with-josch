import { createArrayCsvWriter } from 'csv-writer'
import * as fs from 'fs'
import pdfParse from 'pdf-parse'

const main = async () => {
  try {
    const data = await fs.promises.readFile('tg2.pdf')
    const options = { max: 50 }

    const pdfData = await pdfParse(data, options)

    // Split the text into pages
    const pages = splitIntoPages(pdfData.text)

    // Extract the header from the first page
    const header = pages[0].split('\n')[0].split('|')

    // Create a CSV writer with a custom delimiter
    const csvWriter = createArrayCsvWriter({
      path: 'out.csv',
      header,
      fieldDelimiter: ',',
    })

    // Write the pages to the CSV file
    await csvWriter.writeRecords(
      pages.map((page, index) => [index + 1, page.trim()])
    )
  } catch (error) {
    console.error(error)
  }
}

const splitIntoPages = (text: string): string[] => {
  const pages: string[] = []
  let currentPage: string[] = []

  // Split the text into lines
  const lines = text.split('\n')

  // Iterate over the lines
  for (const line of lines) {
    // Check if the line starts with a page number
    if (/^\d+$/.test(line.trim())) {
      // If so, add the current page to the list of pages
      if (currentPage.length > 0) {
        pages.push(currentPage.join('\n'))
        currentPage = []
      }
    }

    // Add the line to the current page
    currentPage.push(line)
  }

  // Add the last page to the list of pages
  if (currentPage.length > 0) {
    pages.push(currentPage.join('\n'))
  }

  return pages
}

main()

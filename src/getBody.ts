import puppeteer from 'puppeteer'

const url = 'https://vercel.com/docs/frameworks/nextjs'

const main = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url)

  // get the body of the page
  const body = await page.$('body')

  // get the inner text of the body between selectors linked-heading_title__M9yX0 at 0th index and linked-heading_title__M9yX0 at -1 place
  const text = await body.evaluate((body) => {
    const first = body.querySelectorAll('.linked-heading_title__M9yX0')[0]
    const last = body.querySelectorAll('.linked-heading_title__M9yX0')[
      body.querySelectorAll('.linked-heading_title__M9yX0').length - 1
    ]
    const range = document.createRange()
    range.setStart(first, 0)
    range.setEnd(last, 0)
    const documentFragment = range.cloneContents()
    const div = document.createElement('div')
    div.appendChild(documentFragment)
    return div.innerText.replace(/\s+/g, ' ')
  })
  
  console.log(text)

  await browser.close()
}

main()

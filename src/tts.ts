import * as Deno from 'deno'
// open a file and print each row of its contents
const main = async () => {
  const file = await Deno.open('./src/scrapy.csv')
  for await (const row of Deno.readLines(file)) {
    console.log(row)
  }
}

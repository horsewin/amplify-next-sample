import Image from 'next/image'

export default async function Page() {
  const data = await getData()
 
  return <main>
    <p>{data.formattedDate}</p>
  </main>
}

async function getData() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);
 
  return { formattedDate } 
}


export default async function door_fetcher () {
  try {
    const respose = await fetch("http://localhost:4000/doors")
    const data = await respose.json();
    return data
  } catch (e) {
    console.error("::/doors Error::", e)
    return []
  }
}
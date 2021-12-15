/**
 * Get data from endpoint
 * @param {string} api url Api source
 * @returns 
 */
export async function fetchData(api){
    const result = await fetch(
      api
    ).then(res => res.json())
    console.log(result)
    return result
}

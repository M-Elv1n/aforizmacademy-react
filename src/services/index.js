export async function fetchGistRawContent(gistId, fileName) {
  try {
    const apiUrl = `https://api.github.com/gists/${gistId}`;
    const gistResponse = await fetch(apiUrl);

    if (!gistResponse.ok) {
      throw new Error(
        `Failed to fetch Gist: ${gistResponse.status} ${gistResponse.statusText}`
      );
    }

    const gistData = await gistResponse.json();
    const file = gistData.files[fileName];

    if (!file) {
      throw new Error(`File not found in Gist: ${fileName}`);
    }

    const rawUrl = file.raw_url;
    const rawContentResponse = await fetch(rawUrl);

    if (!rawContentResponse.ok) {
      throw new Error(
        `Failed to fetch raw file: ${rawContentResponse.status} ${rawContentResponse.statusText}`
      );
    }

    const rawContent = await rawContentResponse.text();
    return rawContent;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for the caller to handle
  }
}

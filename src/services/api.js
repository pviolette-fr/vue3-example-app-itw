export async function fetchVehicules() {
  const response = await fetch(
    "https://gitlab.com/api/v4/snippets/2095016/raw"
  );

  return response.json();
}

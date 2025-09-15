export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:5000/api/upload", {
    method: "POST",
    body: formData,
  });

  return response.json();
}

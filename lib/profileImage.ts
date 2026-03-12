export function profileImageUrl(id?: string | null, size = 96) {

  if (!id || id === "null" || id === "undefined" || id === "") {
    return "/profile/default.png";
  }

  if (id.startsWith("http://") || id.startsWith("https://")) {
    return id;
  }

  if (id.startsWith("/profile")) {
    return id;
  }

  const cloud = process.env.NEXT_PUBLIC_CLOUD_NAME;

  if (!cloud) {
    return "/profile/default.png";
  }

  return `https://res.cloudinary.com/${cloud}/image/upload/c_fill,w_${size},h_${size},q_auto,f_auto/${id}`;
}
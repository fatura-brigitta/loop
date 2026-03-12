export function profileImageUrl(id?: string | null, size = 96) {

  if (!id || id === "null" || id === "undefined") {
    return "/profile/default.png";
  }

  if (id.startsWith("/profile")) {
    return id;
  }

  if (id.startsWith("http://") || id.startsWith("https://")) {
    return id;
  }

  const cloud = process.env.NEXT_PUBLIC_CLOUD_NAME;

  return `https://res.cloudinary.com/${cloud}/image/upload/w_${size},h_${size},c_fill,q_auto,f_auto/${id}`;
}
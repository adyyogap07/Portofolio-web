export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Project",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" }, // otomatis generate dari title
    },
    {
      name: "description",
      title: "Deskripsi",
      type: "text",
    },
    {
      name: "image",
      title: "Gambar",
      type: "image",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }], // list teks, misal ["Next.js", "Sanity"]
    },
    {
      name: "projectUrl",
      title: "Link Project",
      type: "url",
    },
  ],
};
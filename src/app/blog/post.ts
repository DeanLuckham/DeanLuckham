export interface Post {
  id: number,
  title: string,
  author: string,
  created: Date,
  previewImgURL: string,
  content: string,
  previewContent: string,
  tags: string[],
}

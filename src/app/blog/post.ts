export interface Post {
  id: number,
  title: string,
  author: string,
  created: Date,
  imgURL: string,
  previewImgURL: string,
  content: string,
  previewContent: string,
  tags: string[],
}

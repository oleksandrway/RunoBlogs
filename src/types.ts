export interface Blog {
  imgUrl: string
  categories: [string]| [string, string]| [string, string, string]
  date: string
  title: string
  description: string
  id: string

}
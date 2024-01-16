export interface websiteContents {
    id: string,
    page: string,
    field: string,
    content: string
}

export const initialValues: websiteContents = {
    id: '',
    page: '',
    field: '',
    content: ''
}
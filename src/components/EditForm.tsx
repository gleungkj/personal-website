import { websiteContents } from "@/constants/websiteContents"
import { Field, Form, Formik } from "formik"

interface editFormProps {
    websiteContents: websiteContents
}

export const EditForm = ({websiteContents}: editFormProps) => {

    const handleSubmit = async (): Promise<void> => {
        return
    }
    return (
    <Formik initialValues={websiteContents} 
    onSubmit={handleSubmit}
    >
        <Form id="editForm">
            <Field name="field" placeholder={websiteContents.field} required="true" type="text"/>
            <Field name="content" placeholder={websiteContents.content} required="true" type="text"/>
            <button type='submit'>
                Submit
            </button>  
        </Form>
    </Formik>)
}
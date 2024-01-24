import { addContentInitialValues, websiteContents, websitePageType } from "@/constants/websiteContents";
import { Field, Form, Formik } from "formik";

interface addContentFormProps {
    pageType: websitePageType
}

export const AddContentForm = ({pageType}: addContentFormProps) => {
    const handleSubmit = async (
        values: {field: string, content: string},
    ): Promise<void | Error> => {
        try {
            const newContent = {
                page: pageType,
                field: values.field,
                content: values.content
            }
        } catch (error) {
            return new Error()
        }
    }
    return (
        <Formik initialValues={addContentInitialValues} onSubmit={handleSubmit}>
      <Form id="addContentForm">
        <Field
          name="field"
          placeholder={addContentInitialValues.field}
          required={true}
          type="text"
        />
        <Field
          name="content"
          placeholder={addContentInitialValues.content}
          required={true}
          type="text"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    )
}
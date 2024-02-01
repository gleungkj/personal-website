import { addContentInitialValues, websiteContents, websitePageType } from "@/constants/websiteContents";
import { addContentByPageType } from "@/services/addContentByPageType";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

interface addContentFormProps {
    pageType: websitePageType
    isAdmin: boolean
}

export const AddContentForm = ({pageType, isAdmin}: addContentFormProps) => {

    const router = useRouter()

    const handleSubmit = async (
        values: {field: string, content: string},
    ): Promise<void | Error> => {
      if (!isAdmin) return
        try {
            const newContent = {
                page: pageType,
                field: values.field,
                content: values.content
            }

            await addContentByPageType(newContent)
            router.refresh()
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
        <button type="submit" disabled={!isAdmin}>Submit</button>
      </Form>
    </Formik>
    )
}
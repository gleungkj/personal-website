import { IWebsiteContents } from "@/constants/websiteContents";
import { Field, Form, Formik } from "formik";
import { updateEntryById } from "@/services/updateById";
import { useRouter } from "next/navigation";

interface IEditFormProps {
  websiteContents: IWebsiteContents;
  isAdmin: boolean
}

export const EditForm = ({ websiteContents, isAdmin }: IEditFormProps) => {

  const router = useRouter()

  const handleSubmit = async (
    values: IWebsiteContents,
  ): Promise<void | Error> => {
    if (!isAdmin) return
    try {
      const newContents: IWebsiteContents = {
        id: websiteContents.id,
        page: websiteContents.page,
        field: values.field,
        content: values.content,
      };

      await updateEntryById(newContents);
      router.refresh()
    } catch (error) {
      return new Error();
    }
  };
  return (
    <Formik initialValues={websiteContents} onSubmit={handleSubmit}>
      <Form id="editForm">
        <Field
          name="field"
          placeholder={websiteContents.field}
          required={true}
          type="text"
        />
        <Field
          name="content"
          placeholder={websiteContents.content}
          required={true}
          type="text"
        />
        <button type="submit" disabled={!isAdmin}>Submit</button>
      </Form>
    </Formik>
  );
};

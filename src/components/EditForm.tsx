import { websiteContents } from "@/constants/websiteContents";
import { Field, Form, Formik } from "formik";
import { updateEntryById } from "@/services/updateById";

interface editFormProps {
  websiteContents: websiteContents;
}

export const EditForm = ({ websiteContents }: editFormProps) => {
  const handleSubmit = async (
    values: websiteContents,
  ): Promise<void | Error> => {
    try {
      const newContents: websiteContents = {
        id: websiteContents.id,
        page: websiteContents.page,
        field: values.field,
        content: values.content,
      };

      updateEntryById(newContents);
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

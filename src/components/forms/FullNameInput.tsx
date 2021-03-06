import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function FullNameInput(props: any) {
  const fullName = props.fullName;
  const initialValues = {
    fullName,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleBusinessEntitySave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormicControl
            onChange={props.handleBusinessEntityNameChange}
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="fullName"
            value={fullName}
          />
        </Form>
      )}
    </Formik>
  );
}

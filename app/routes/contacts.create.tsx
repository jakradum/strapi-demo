import { useNavigate } from "@remix-run/react";

export default function CreateContact() {
  const navigate = useNavigate();

  return (
    <form>
      <div className="create-form-grid">
        <FormInput
          aria-label="First name"
          name="first"
          type="text"
          label="First name"
          placeholder="First"
          errors={false}
        />
        <FormInput
          aria-label="Last name"
          name="last"
          type="text"
          label="Last name"
          placeholder="Last"
          errors={false}
        />
        <FormInput
          name="twitter"
          type="text"
          label="Twitter"
          placeholder="@jack"
          errors={false}
        />
        <FormInput
          aria-label="Avatar URL"
          name="avatar"
          type="text"
          label="Avatar URL"
          placeholder="https://example.com/avatar.jpg"
          errors={false}
        />
      </div>
      <div>
        <label>
          <span>Notes</span>
          <textarea name="note" rows={6} />
        </label>
      </div>

      <div className="button-group">
        <button type="submit">Create</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function FormInput({
  type,
  name,
  label,
  placeholder,
  defaultValue = "",
  errors,
}: Readonly<{
  type: string,
  name: string,
  label?: string,
  placeholder?: string,
  errors: any,
  defaultValue?: string,
}>) {
  return (
    <div className="input-field">
      <div>
        <label htmlFor={name}>{label}</label>
        <div>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </div>
      </div>
      <ul>
        {errors && errors[name]
          ? errors[name].map((error: string) => (
              <li key={error} className="input-error">
                {error}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
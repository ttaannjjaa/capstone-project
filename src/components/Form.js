import styled from 'styled-components';

export default function Form({ setFormData, formData, handleSubmit, version }) {
  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormData({ ...formData, [name]: value });
  };

  function handleSave(event) {
    event.preventDefault();
    event.stopPropagation();
    handleSubmit({
      foodName: formData.foodName,
      foodTaste: formData.foodTaste,
      foodStyle: formData.foodStyle,
      foodJudge: formData.foodJudge,
    });
  }

  return (
    <FormContainer>
      <FormStyled
        key={version}
        onSubmit={handleSave}
        formData={formData}
        setFormData={setFormData}
        id="formCatFood"
        autocomplete="off"
        aria-describedby="form to document the judgement of your cat about its food"
        data-testid="form"
      >
        <label htmlFor="foodName">Markenname *</label>
        <TextInput
          id="foodName"
          type="text"
          required
          maxLength="20"
          onChange={event => {
            setFormData({ ...formData, foodName: event.target.value.trim() });
          }}
        />

        <label htmlFor="foodTaste">Sorte *</label>
        <TextField
          id="foodTaste"
          name="foodTaste"
          required
          maxLength="84"
          placeholder="z.B. Huhn, Lachs, Rind"
          rows="4"
          onChange={event => {
            setFormData({
              ...formData,
              foodTaste: event.target.value.trim(),
            });
          }}
        />

        <label htmlFor="foodStyle">Zubereitung</label>
        <TextInput
          type="text"
          id="foodStyle"
          name="foodStyle"
          maxLength="20"
          placeholder="z.B. Gelee, Sauce, Pastete"
          onChange={event =>
            setFormData({ ...formData, foodStyle: event.target.value.trim() })
          }
        />

        <Judge>
          <RadioStyled>
            <input
              type="radio"
              name="foodJudge"
              form="formCatFood"
              value={true}
              onChange={handleChange}
              checked={formData.foodJudge === 'true'}
            />
            <label>mag ich gerne</label>
          </RadioStyled>
          <RadioStyled>
            <input
              type="radio"
              name="foodJudge"
              form="formCatFood"
              value={false}
              onChange={handleChange}
              checked={formData.foodJudge === 'false'}
            />
            <label>mag ich nicht</label>
          </RadioStyled>
        </Judge>
      </FormStyled>

      <SaveButton type="submit" form="formCatFood">
        SPEICHERN
      </SaveButton>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

const FormStyled = styled.form`
  min-width: 280px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0;
`;

const TextInput = styled.input`
  min-width: 280px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 10px 0 18px 0;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  &:focus {
    outline: 1px solid var(--steelblue);
  }
`;

const TextField = styled.textarea`
  min-width: 280px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 10px 0 18px 0;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  &:focus {
    outline: 1px solid var(--steelblue);
  }
`;

const Judge = styled.fieldset`
  min-width: 280px;
  width: 100%;
  display: flex;
  gap: 18px;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  border: none;
`;

const RadioStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;

  & > input {
    margin: 10px;
  }
`;

const SaveButton = styled.button`
  min-width: 270px;
  width: 92%;
  padding: 6px;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--steelblue);
  box-shadow: var(--box-shadow-inset);
  border-radius: 10px;
`;

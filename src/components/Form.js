import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

export default function Form({ handleData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      foodName: '',
      foodTaste: '',
      foodStyle: '',
      foodJudge: '',
    },
  });

  const onSubmit = data => {
    const message = `Die Bewertung wurde erfolgreich gespeichert.`;
    alert(JSON.stringify(message));
    const formData = {
      id: nanoid(),
      foodName: data.foodName,
      foodTaste: data.foodTaste,
      foodStyle: data.foodStyle,
      foodJudge: data.foodJudge,
    };
    handleData(formData);
    reset();
  };

  return (
    <FormContainer>
      <FormStyled
        onSubmit={handleSubmit(onSubmit)}
        id="formCatFood"
        autocomplete="off"
        aria-describedby="form to document the judgement of your cat about its food"
        data-testid="form"
      >
        <label htmlFor="foodName">Markenname *</label>
        <TextInput
          id="foodName"
          type="text"
          maxLength="21"
          aria-invalid={errors.foodName ? 'true' : 'false'}
          {...register('foodName', {
            required: {
              value: true,
              message: 'Wie willst Du etwas wiederfinden ohne Namen?',
            },
            maxLength: {
              value: 20,
              message: 'ups, Limit von 2o Buchstaben erreicht',
            },
            pattern: { value: /^[A-Za-z]+/ },
          })}
        />
        {errors.foodName && <span>{errors.foodName.message}</span>}
        <label htmlFor="foodTaste">Sorte *</label>
        <TextField
          id="foodTaste"
          maxLength="85"
          rows="4"
          placeholder="z.B. Huhn, Lachs, Rind"
          aria-invalid={errors.foodTaste ? 'true' : 'false'}
          {...register('foodTaste', {
            required: {
              value: true,
              message: 'Ohne diese Angabe kann die App nicht funktionieren.',
            },
            maxLength: {
              value: 84,
              message: '84 Buchstaben sollten doch reichen.',
            },
            pattern: { value: /^[A-Za-z]+/ },
          })}
        />
        {errors.foodTaste && <span>{errors.foodTaste.message}</span>}
        <label htmlFor="foodStyle">Zubereitung (Angabe optional)</label>
        <TextInput
          id="foodStyle"
          type="text"
          maxLength="21"
          placeholder="z.B. Gelee, Ragout, Pastete"
          aria-invalid={errors.foodStyle ? 'true' : 'false'}
          {...register('foodStyle', {
            maxLength: {
              value: 20,
              message: 'ups, Limit von 2o Buchstaben erreicht',
            },
            pattern: { value: /^[A-Za-z]+/ },
          })}
        />
        {errors.foodStyle && <span>{errors.foodStyle.message}</span>}

        <Judge>
          <RadioStyled>
            <input
              id="liked"
              type="radio"
              value="liked"
              {...register('foodJudge', { required: { value: true } })}
              defaultChecked
            />
            <label htmlFor="liked">lecker</label>
          </RadioStyled>
          <RadioStyled>
            <input
              id="unliked"
              type="radio"
              value="unliked"
              {...register('foodJudge', { required: { value: true } })}
            />
            <label htmlFor="unliked">mag ich nicht</label>
          </RadioStyled>
        </Judge>
        <SaveButton type="submit">SPEICHERN</SaveButton>
      </FormStyled>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  margin-top: 2rem;
  padding: 5px;
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
  margin: 8px 0 18px 0;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const TextField = styled.textarea`
  min-width: 280px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 8px 0 18px 0;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const Judge = styled.fieldset`
  min-width: 280px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
  min-width: 280px;
  width: 95%;
  padding: 6px;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--steelblue);
  box-shadow: var(--box-shadow-inset);
  border-radius: 10px;
`;

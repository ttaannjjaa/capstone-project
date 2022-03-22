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
      foodName: data.foodName.trim(),
      foodTaste: data.foodTaste.trim(),
      foodStyle: data.foodStyle.trim(),
      foodJudge: data.foodJudge.trim(),
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
            pattern: {
              value: /^[A-Za-z]+/i,
              message: 'bitte Text eingeben',
            },
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
            pattern: {
              value: /^[A-Za-z]+/i,
              message: 'bitte Text eingeben',
            },
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
            pattern: {
              value: /^[A-Za-z]+/i,
              message: 'bitte Text eingeben',
            },
          })}
        />
        {errors.foodStyle && <span>{errors.foodStyle.message}</span>}

        <Judge>
          <RadioStyled>
            <RadioButton
              id="liked"
              name="foodJudge"
              type="radio"
              value="liked"
              {...register('foodJudge', { required: { value: true } })}
              defaultChecked
            />
            <label htmlFor="liked">lecker</label>
          </RadioStyled>
          <RadioStyled>
            <RadioButton
              id="unliked"
              name="foodJudge"
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
  margin-top: 1rem;
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

  label {
    margin-top: 15px;
  }

  span {
    color: var(--coral);
    font-size: 0.7rem;
    padding: 3px;
    margin: 0;
  }
`;

const TextInput = styled.input`
  min-width: 280px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 8px;
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
  margin-top: 8px;
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
  margin-top: 8px;
`;

const RadioStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const RadioButton = styled.input`
  margin-right: 10px;
  margin-top: 18px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--steelblue);
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  :checked::before {
    transform: scale(1);
  }
  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: var(--coral);
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
  letter-spacing: 1px;
`;

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
      foodTaste: 'tuna',
      foodStyle: 'soup',
      foodRating: '',
      date: '',
    },
  });

  const dateToday = new Date().toISOString().substring(0, 10);

  const onSubmit = data => {
    const formData = {
      id: nanoid(),
      foodName: data.foodName.trim(),
      foodTaste: data.foodTaste.trim(),
      foodStyle: data.foodStyle.trim(),
      foodRating: data.foodRating.trim(),
      selectedDate: data.date,
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
        <label htmlFor="foodName">brand name *</label>
        <TextInput
          id="foodName"
          type="text"
          minLength="3"
          maxLength="21"
          aria-invalid={errors.foodName ? 'true' : 'false'}
          {...register('foodName', {
            required: {
              value: true,
              message:
                'How do you want to find something again without a name?',
            },
            maxLength: {
              value: 20,
              message: 'ups, limit of 2o characters reached',
            },
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: 'no numbers or special characters allowed',
            },
          })}
        />
        {errors.foodName && <span>{errors.foodName.message}</span>}
        <label htmlFor="foodTaste">flavour *</label>
        <TextField
          id="foodTaste"
          minLength="3"
          maxLength="85"
          rows="4"
          placeholder="z.B. chicken, salmon"
          aria-invalid={errors.foodTaste ? 'true' : 'false'}
          {...register('foodTaste', {
            required: {
              value: true,
              message: 'The app cannot function without this information.',
            },
            maxLength: {
              value: 84,
              message: '84 letters should be enough.',
            },
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: 'no numbers or special characters allowed',
            },
          })}
        />
        {errors.foodTaste && <span>{errors.foodTaste.message}</span>}
        <label htmlFor="foodStyle">preparation (input optional)</label>
        <TextInput
          id="foodStyle"
          type="text"
          minLength="3"
          maxLength="21"
          placeholder="e.g. jelly, ragu, pate"
          aria-invalid={errors.foodStyle ? 'true' : 'false'}
          {...register('foodStyle', {
            maxLength: {
              value: 20,
              message: 'ups, limit of 2o characters reached',
            },
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: 'no numbers or special characters allowed',
            },
          })}
        />
        {errors.foodStyle && <span>{errors.foodStyle.message}</span>}

        <RatingField>
          <RadioStyled>
            <RadioButton
              id="liked"
              name="foodRating"
              type="radio"
              value="liked"
              {...register('foodRating', { required: { value: true } })}
              defaultChecked
            />
            <label htmlFor="liked">liked</label>
          </RadioStyled>
          <RadioStyled>
            <RadioButton
              id="unliked"
              name="foodRating"
              type="radio"
              value="unliked"
              {...register('foodRating', { required: { value: true } })}
            />
            <label htmlFor="unliked">disliked</label>
          </RadioStyled>
        </RatingField>
        <label htmlFor="date">fed on (input optional)</label>
        <DateInput
          id="date"
          name="date"
          type="date"
          max={dateToday}
          {...register('date')}
        />
        <SaveButton type="submit">SAVE</SaveButton>
      </FormStyled>
    </FormContainer>
  );
}

const FormContainer = styled.div`
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
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  margin-top: 8px;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  :hover {
    cursor: pointer;
  }
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const TextField = styled.textarea`
  min-width: 280px;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  margin-top: 8px;
  padding: 5px;
  background-color: var(--peach);
  box-shadow: var(--box-shadow-inputfields);
  border-radius: 5px;
  border: none;
  :hover {
    cursor: pointer;
  }
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const RatingField = styled.fieldset`
  min-width: 280px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 0.5rem;
  border: none;
  margin-top: 8px;
`;

const RadioStyled = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
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
  &:hover {
    cursor: pointer;
  }
`;

const DateInput = styled.input`
  background-color: var(--peach);
  border: none;
  padding: 5px;
  margin: 8px 0 18px 0;
  border-radius: 5px;
  font-family: inherit;
  :hover {
    cursor: pointer;
  }
  &:focus {
    outline: 1px solid var(--coral);
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
  align-self: center;
  :hover {
    background-color: var(--lightsteel);
    color: var(--black);
    border: 1px var(--coral) solid;
    cursor: pointer;
  }
  &:active {
    opacity: 0.9;
    border: 2px solid var(--steelblue);
  }
`;

import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ButtonText from './ButtonText.js';

export default function Form({ handleData, editData, setToEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: editData[0]
      ? {
          foodName: editData[0].foodName,
          foodTaste: editData[0].foodTaste,
          foodStyle: editData[0].foodStyle,
          foodRating: editData[0].foodRating,
          date: editData[0].selectedDate,
        }
      : {
          foodName: '',
          foodTaste: '',
          foodStyle: '',
          foodRating: '',
          date: '',
        },
  });

  const dateToday = new Date().toISOString().substring(0, 10);
  const navigate = useNavigate();

  const onSubmit = data => {
    const formData = {
      id: editData.id ? editData.id : nanoid(),
      foodName: data.foodName.trim(),
      foodTaste: data.foodTaste.trim(),
      foodStyle: data.foodStyle.trim(),
      foodRating: data.foodRating.trim(),
      selectedDate: data.date,
    };
    handleData(formData);
    setToEdit(false);
    reset();
    if (data.foodRating === 'liked') {
      navigate('/likedfoodpage', { replace: true });
    }
    if (data.foodRating === 'disliked') {
      navigate('/dislikedfoodpage', { replace: true });
    }
  };

  return (
    <FormContainer>
      <FormStyled
        onSubmit={handleSubmit(onSubmit)}
        id="formCatFood"
        autocomplete="off"
        aria-describedby="aria-text"
        data-testid="form"
      >
        <span className="sr-only" id="aria-text">
          Form to enter information about catfood including the vote of the cat
        </span>
        <label htmlFor="foodName">brand name *</label>
        <TextInput
          className="notranslate"
          type="text"
          aria-invalid={errors?.foodName ? 'true' : 'false'}
          {...register('foodName', {
            required: 'Please enter the (brand) name of the cat food',
            min: {
              value: 3,
              message: 'sorry, you should enter at least 3 characters',
            },
            max: {
              value: 25,
              message: 'sorry, 25 character limit reached',
            },
            pattern: {
              value: /^[\u00C0-\u017FA-Z0-9a-z &-+,'.]+$/,
              message: 'sorry, no other special characters allowed',
            },
          })}
        />
        {errors?.foodName && <span>{errors.foodName.message}</span>}

        <label htmlFor="foodTaste">flavour *</label>
        <TextField
          rows="4"
          placeholder="z.B. chicken, salmon"
          aria-invalid={errors.foodTaste ? 'true' : 'false'}
          {...register('foodTaste', {
            required: 'Please enter this information.',
            min: {
              value: 3,
              message: 'sorry, you should enter at least 3 characters',
            },
            max: {
              value: 85,
              message: 'sorry, 85 character limit reached',
            },
            pattern: {
              value: /^[\u00C0-\u017FA-Z0-9a-z &-+,;]+$/,
              message: 'sorry, no other special characters allowed',
            },
          })}
        />
        {errors?.foodTaste && <span>{errors.foodTaste.message}</span>}
        <label htmlFor="foodStyle">preparation (input optional)</label>
        <TextInput
          type="text"
          placeholder="e.g. jelly, ragu, pate"
          aria-invalid={errors?.foodStyle ? 'true' : 'false'}
          {...register('foodStyle', {
            max: {
              value: 20,
              message: 'sorry, 2o character limit reached',
            },
            pattern: {
              value: /^[\u00C0-\u017FA-Z0-9a-z &-+,;]+$/,
              message: 'no numbers or special characters allowed',
            },
          })}
        />
        {errors?.foodStyle && <span>{errors.foodStyle.message}</span>}

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
              id="disliked"
              name="foodRating"
              type="radio"
              value="disliked"
              {...register('foodRating', { required: { value: true } })}
            />
            <label htmlFor="disliked">disliked</label>
          </RadioStyled>
        </RatingField>
        <label htmlFor="date">fed on (input optional)</label>
        <DateInput
          id="date"
          type="date"
          max={dateToday}
          {...register('date')}
        />
        <SaveButton
          variant="savebutton"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          SAVE
        </SaveButton>
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
  margin: 8px 0 30px 0;
  border-radius: 5px;
  font-family: inherit;
  :hover {
    cursor: pointer;
  }
  &:focus {
    outline: 1px solid var(--coral);
  }
`;

const SaveButton = styled(ButtonText)`
  background-color: ${props => (props.disabled ? 'var(--grey)' : '')};
  :hover {
    background-color: ${props => (props.disabled ? 'var(--grey)' : '')};
    color: ${props => (props.disabled ? 'var(--white)' : '')};
    border: ${props => props.disabled && 'none'};
  }
`;
